export interface ThumbnailOwnProps {}

export interface ThumbnailStateProps {
  name: string;
}

export interface ThumbnailDispatchProps {}

export default interface ThumbnailProps
  extends ThumbnailOwnProps,
    ThumbnailStateProps,
    ThumbnailOwnProps {}
