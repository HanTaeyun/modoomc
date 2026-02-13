import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { KAKAOTALK_URL, INSTAGRAM_URL } from '../constants';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    };

    return (
        <section id="contact" className="relative w-full py-24 bg-[#FFD600] text-black z-20">
             <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-black font-['Manrope'] mb-6"
                    >
                        CONTACT
                    </motion.h2>
                    <p className="text-gray-900 font-bold font-['Noto_Sans_KR'] text-lg">
                        성공적인 행사를 위한 첫걸음, 모두의MC와 함께하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12 bg-black text-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Left Info Column (Increased width ratio to prevent text wrapping) */}
                    <div className="lg:col-span-2 p-8 md:p-12 bg-zinc-900 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-black mb-6 border-b border-gray-700 pb-2">연락처 정보</h3>
                                <div className="space-y-6">
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Phone className="w-4 h-4" /> 전화번호
                                        </div>
                                        <a href="tel:010-8620-2939" className="text-xl md:text-2xl font-bold group-hover:text-[#FFD600] transition-colors">
                                            010.8620.2939
                                        </a>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Mail className="w-4 h-4" /> 이메일
                                        </div>
                                        <a href="mailto:modoomc@naver.com" className="text-xl md:text-2xl font-bold group-hover:text-[#FFD600] transition-colors">
                                            modoomc@naver.com
                                        </a>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Instagram className="w-4 h-4" /> 인스타그램
                                        </div>
                                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold group-hover:text-[#FFD600] transition-colors">
                                            @modoomc
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 카카오톡 버튼 */}
                        <div className="pt-8 mt-auto">
                            <a 
                                href={KAKAOTALK_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-3 bg-[#FAE100] hover:bg-[#FCE620] text-[#371D1E] font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <MessageCircle className="w-6 h-6 fill-current" />
                                <span>카카오톡 문의하기</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-3 p-8 md:p-12 bg-black">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-[#FFD600] font-bold mb-2 font-['Noto_Sans_KR']">단체명 *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600"
                                        placeholder="단체명을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#FFD600] font-bold mb-2 font-['Noto_Sans_KR']">담당자명 *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600"
                                        placeholder="담당자명을 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-[#FFD600] font-bold mb-2 font-['Noto_Sans_KR']">행사명 *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600"
                                        placeholder="행사명을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#FFD600] font-bold mb-2 font-['Noto_Sans_KR']">연락처 *</label>
                                    <input 
                                        type="tel" 
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600"
                                        placeholder="010-0000-0000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">행사 날짜</label>
                                    <div className="relative">
                                        <input 
                                            type="date" 
                                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">예상 인원</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600"
                                        placeholder="예상 인원을 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">예산 범위</label>
                                <select className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all placeholder-gray-600 appearance-none">
                                    <option value="" disabled selected>예산 범위를 선택해주세요</option>
                                    <option value="under_100">100만원 미만</option>
                                    <option value="100_300">100만원 ~ 300만원</option>
                                    <option value="300_500">300만원 ~ 500만원</option>
                                    <option value="500_1000">500만원 ~ 1000만원</option>
                                    <option value="over_1000">1000만원 이상</option>
                                    <option value="undecided">미정</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">요청사항</label>
                                <textarea 
                                    rows={4}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#FFD600] focus:ring-1 focus:ring-[#FFD600] text-white transition-all resize-none placeholder-gray-600"
                                    placeholder="행사 성격, 원하는 진행 스타일 등 구체적인 요청사항을 적어주세요"
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-3 py-2">
                                <input type="checkbox" id="privacy" required className="w-5 h-5 accent-[#FFD600] cursor-pointer" />
                                <label htmlFor="privacy" className="text-sm text-gray-300 cursor-pointer select-none">
                                    <span className="font-bold text-white">개인정보 수집 및 이용</span>에 동의합니다. <span className="text-[#FFD600]">*</span>
                                </label>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-white text-black font-black py-4 hover:bg-[#FFD600] transition-colors uppercase tracking-widest rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            >
                                문의하기
                            </button>
                        </form>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Contact;