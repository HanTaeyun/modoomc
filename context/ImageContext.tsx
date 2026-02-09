import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  uploadImage: (name: string, url: string) => void;
  getImage: (path: string) => string;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});

  const uploadImage = (name: string, url: string) => {
    setImages(prev => ({ ...prev, [name]: url }));
  };

  const getImage = (path: string) => {
    // 경로에서 파일명만 추출 (예: /images/profile.jpg -> profile.jpg)
    const fileName = path.split('/').pop();
    if (fileName && images[fileName]) {
      return images[fileName];
    }
    return path;
  };

  return (
    <ImageContext.Provider value={{ images, uploadImage, getImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};