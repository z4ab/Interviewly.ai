'use server'


export async function transcribeAudio(formData) {
  const file = formData.get('file');
  console.log('File:', file);
  console.log('File size:', file.size); // Check the size here
}

