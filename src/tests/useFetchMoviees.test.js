import { renderHook } from "@testing-library/react"
import useFetchMovies from "../services/fetchData"

global.fetch = jest.function(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            results: [
                {
                    id: 1,
                    title: "Movie 1",
                },
            ]
        })
    })
})

test('fetechMovies', async () => {
    const { result, waitforNextUpdate } = renderHook(() => useFetchMovies())
    await waitforNextUpdate()
    expect(result.current.data.length).toBeGreaterThan(0)
})