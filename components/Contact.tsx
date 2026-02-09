import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { KAKAOTALK_URL, INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    };

    return (
        <section id="contact" className="relative w-full py-24 bg-zinc-950 text-white z-20">
             <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-black font-['Manrope'] mb-6"
                    >
                        CONTACT
                    </motion.h2>
                    <p className="text-gray-400 font-['Noto_Sans_KR'] text-lg">
                        성공적인 행사를 위한 첫걸음, 모두의MC와 함께하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800">
                    <div className="space-y-8 flex flex-col justify-between">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">PHONE</h3>
                                <a href="tel:010-1234-5678" className="text-2xl font-medium hover:text-[#00A651] transition-colors flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-[#00A651]" /> 010.1234.5678
                                </a>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">EMAIL</h3>
                                <a href="mailto:contact@modoomc.com" className="text-2xl font-medium hover:text-[#00A651] transition-colors flex items-center gap-3 break-all">
                                    <Mail className="w-6 h-6 text-[#00A651]" /> contact@modoomc.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">SOCIAL</h3>
                                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-2xl font-medium hover:text-[#00A651] transition-colors flex items-center gap-3">
                                    <Instagram className="w-6 h-6 text-[#00A651]" /> @modoomc
                                </a>
                            </div>
                        </div>

                        {/* 카카오톡 버튼 추가 */}
                        <div className="pt-4">
                            <a 
                                href={KAKAOTALK_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-3 bg-[#FAE100] hover:bg-[#FCE620] text-[#371D1E] font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <MessageCircle className="w-6 h-6 fill-current" />
                                <span>카카오톡 1:1 간편 문의하기</span>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm text-gray-500 mb-2 font-['Noto_Sans_KR']">성함 / 기업명</label>
                            <input 
                                type="text" 
                                required 
                                className="w-full bg-zinc-900 border-b border-gray-700 p-3 focus:outline-none focus:border-[#00A651] transition-colors"
                                placeholder="입력해주세요"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-2 font-['Noto_Sans_KR']">연락처</label>
                            <input 
                                type="tel" 
                                required 
                                className="w-full bg-zinc-900 border-b border-gray-700 p-3 focus:outline-none focus:border-[#00A651] transition-colors"
                                placeholder="010-0000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-2 font-['Noto_Sans_KR']">행사 내용</label>
                            <textarea 
                                rows={4}
                                required 
                                className="w-full bg-zinc-900 border-b border-gray-700 p-3 focus:outline-none focus:border-[#00A651] transition-colors resize-none"
                                placeholder="행사 종류, 날짜, 장소 등을 적어주세요"
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 mt-4 hover:bg-gray-200 transition-colors uppercase tracking-widest rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
             </div>
        </section>
    );
};

export default Contact;