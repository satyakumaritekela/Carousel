export interface MediaItem {
  type: string;
  src: string;
  id: string;
  title?: string;
}

export interface CarouselProps {
  media: MediaItem[];
}
