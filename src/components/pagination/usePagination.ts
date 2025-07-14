import {useCallback, useMemo} from "react";

//создаёт массив чисел от start до end включительно.
const range = (start: number, end: number) => {
    const length = end - start + 1

    return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
    count: number                           // всего страниц
    onChange: (pageNumber: number) => void  // функция смены страницы
    page: number                            // текущая страница
    siblings?: number                       // сколько "соседних" страниц показывать рядом с текущей
}

type PaginationRange = ('...' | number)[]

export const usePagination = ({ count, onChange, page, siblings = 1 }: UsePaginationParamType) => {
    const paginationRange = useMemo(() => {

        // Это максимум страниц, которые мы хотим отрисовать без сокращения (текущая, первый, последний, и по одному "соседу" с каждой стороны + 2 точки).
        const totalPageNumbers = siblings + 5

        //case 1: Если страниц мало (влезают все)
        if (totalPageNumbers >= count) {
            return range(1, count)
        }

        //Рассчитайте левый и правый индексы родственных элементов и убедитесь, что они находятся в пределах диапазона 1 и totalPageCount.
        const leftSiblingIndex = Math.max(page - siblings, 1)
        const rightSiblingIndex = Math.min(page + siblings, count)

        // Мы не отображаем точки, когда нужно вставить только один номер страницы
        // между крайними значениями одноуровневых элементов и ограничениями количества страниц, то есть 1 и totalPageCount.
        // Поэтому мы используем leftSiblingIndex > 2 и rightSiblingIndex < totalPageCount - 2.
        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < count - 2

        const firstPageIndex = 1
        const lastPageIndex = count

        //Case 2: Слева нет точек, но справа есть:
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblings
            const leftRange = range(1, leftItemCount)

            return [...leftRange, DOTS, count]
        }

        //case 3: Справа нет точек, но слева есть:
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblings
            const rightRange = range(count - rightItemCount + 1, count)

            return [firstPageIndex, DOTS, ...rightRange]
        }
        //case 4: Точки с обеих сторон:
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex)

            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
    }, [siblings, page, count]) as PaginationRange

    const lastPage = paginationRange.at(-1)

    const isFirstPage = page === 1
    const isLastPage = page === lastPage

    const handleNextPageClicked = useCallback(() => {
        onChange(page + 1)
    }, [page, onChange])

    const handlePreviousPageClicked = useCallback(() => {
        onChange(page - 1)
    }, [page, onChange])

    function handleMainPageClicked(pageNumber: number) {
        return () => onChange(pageNumber)
    }

    return {
        paginationRange,            // список номеров и "..." для отрисовки
        handleMainPageClicked,      // клик по номеру страницы
        handleNextPageClicked,      // клик "вперёд"
        handlePreviousPageClicked,  // клик "назад"
        isFirstPage,                // текущая — первая?
        isLastPage                  // текущая — последняя?
    }
}