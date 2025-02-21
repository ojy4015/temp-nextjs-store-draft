import { createClient } from '@supabase/supabase-js';

const bucket = 'tptbucket';

export const supabase = createClient(
  process.env.SUPBASE_URL as string,
  process.env.SUPBASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  console.log('url : ', url);
  const imageName = url.split('/').pop();
  console.log('imageName : ', imageName);
  if (!imageName) throw new Error('Invalid URL');
  return supabase.storage.from(bucket).remove([imageName]);
};
