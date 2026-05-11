export interface GalleryItem {
  src: string;
  alt: string;
}
export interface WindowOpenedItems {
  topImage: string;
  bottomImage: string;
  backgroundImage: string;
  description: string;
  mainLabel: string;
  type: 'bottom' | 'side';
}
