export interface ThumbnailOwnProps {}

export interface ThumbnailStateProps {
  name?: string;
  imageUrl?: string;
}

export interface ThumbnailDispatchProps {}

export default interface ThumbnailProps
  extends ThumbnailOwnProps,
    ThumbnailStateProps,
    ThumbnailOwnProps {}
