import { Attachment, ImageDto, ImagesResult, LinkAction } from "./types";

function isAttachment(obj: any): obj is Attachment {
    return typeof obj === 'object' &&
      typeof obj.big === 'string' &&
      typeof obj.small === 'string';
  }
  
  function isLinkAction(obj: any): obj is LinkAction {
    return typeof obj === 'object' &&
      typeof obj.methods === 'string' &&
      typeof obj.rel === 'string' &&
      typeof obj.uri === 'string';
  }
  
  function isImageDto(obj: any): obj is ImageDto {
    return typeof obj === 'object' &&
      typeof obj.author === 'string' &&
      typeof obj.created_at === 'string' &&
      typeof obj.id === 'number' &&
      typeof obj.liked === 'boolean' &&
      typeof obj.likes_count === 'number' &&
      Array.isArray(obj.links) && obj.links.every(isLinkAction) &&
      isAttachment(obj.main_attachment) &&
      typeof obj.price === 'number' &&
      typeof obj.title === 'string' &&
      typeof obj.type === 'string';
  }
  
  export function isImagesResult(obj: any): obj is ImagesResult {
    return typeof obj === 'object' &&
      Array.isArray(obj.data) && obj.data.every(isImageDto) &&
      typeof obj.limit === 'number' &&
      typeof obj.page === 'number' &&
      typeof obj.total === 'number';
  }