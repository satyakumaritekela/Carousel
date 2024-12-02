import { renderHook, act } from "@testing-library/react-hooks";
import useInfiniteCarousel from "../../hooks/useInfiniteCarousel";
import mockMedia from "../__mocks__/mediaMock";

describe("useInfiniteCarousel", () => {
  it("initializes correctly with visible items", () => {
    const { result } = renderHook(() => useInfiniteCarousel(mockMedia));

    expect(result.current.currentIndex).toBe(0);
  });

  it("navigates to the next item", () => {
    const { result } = renderHook(() => useInfiniteCarousel(mockMedia));

    act(() => {
      result.current.handleNext();
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it("navigates to the previous item", () => {
    const { result } = renderHook(() => useInfiniteCarousel(mockMedia));

    act(() => {
      result.current.handlePrev();
    });

    expect(result.current.currentIndex).toBe(mockMedia.length - 1);
  });

  it("updates visible items on navigation", () => {
    const { result } = renderHook(() => useInfiniteCarousel(mockMedia));

    act(() => {
      result.current.handleNext();
    });

    act(() => {
      result.current.handlePrev();
    });
  });
});
