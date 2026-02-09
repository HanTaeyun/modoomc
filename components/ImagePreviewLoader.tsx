import React, { useState } from 'react';
import { useImages } from '../context/ImageContext';
import { Image as ImageIcon, X, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const REQUIRED_FILES = [
  'profile_main.jpg',
  'neowiz_conference.jpg',
  'quiz_show.jpg',
  'squid_game_guard.jpg',
  'songpa_festival.jpg',
  'sports_day_group.jpg',
  'inflatable_castle.jpg',
  'trail_1.jpg', 'trail_2.jpg', 'trail_3.jpg', 
  'trail_4.jpg', 'trail_5.jpg', 'trail_6.jpg'
];

const ImagePreviewLoader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { uploadImage, images } = useImages();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const objectUrl = URL.createObjectURL(file);
      uploadImage(file.name, objectUrl);
    });
  };

  const loadedCount = Object.keys(images).length;
  const totalCount = REQUIRED_FILES.length;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] bg-[#00A651] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <ImageIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="bg-zinc-900 w-full max-w-lg rounded-2xl border border-zinc-800 p-6 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-xl font-bold text-white mb-2">이미지 미리보기 설정</h2>
              <p className="text-gray-400 text-sm mb-6">
                이름을 변경한 이미지 파일들을 아래 영역에 드래그하여 놓아주세요.
                서버에 저장되지 않고 현재 브라우저에서만 미리보기됩니다.
              </p>

              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive ? "border-[#00A651] bg-[#00A651]/10" : "border-zinc-700 hover:border-zinc-500"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-10 h-10 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">이미지 파일을 드래그하거나 클릭하여 업로드</p>
                <p className="text-xs text-gray-500">지원 형식: JPG, PNG</p>
                <input 
                  type="file" 
                  multiple 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>로드된 파일 ({loadedCount}/{totalCount})</span>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                    {REQUIRED_FILES.map(file => (
                        <div key={file} className="flex items-center gap-2 p-2 rounded bg-zinc-800/50">
                            <div className={`w-2 h-2 rounded-full ${images[file] ? 'bg-[#00A651]' : 'bg-red-500'}`} />
                            <span className={`text-xs truncate ${images[file] ? 'text-white' : 'text-gray-500'}`}>
                                {file}
                            </span>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImagePreviewLoader;