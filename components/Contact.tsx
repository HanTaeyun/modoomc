import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, FileText } from 'lucide-react';
import { KAKAOTALK_URL, INSTAGRAM_URL, BLOG_URL, GOOGLE_FORM_ACTION_URL, GOOGLE_FORM_ENTRY_IDS } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        organization: '',
        name: '',
        eventName: '',
        phone: '',
        date: '',
        attendees: '',
        budget: '',
        request: '',
        privacy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.privacy) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        // 구글 폼 설정이 안되어 있을 경우 경고
        if (GOOGLE_FORM_ACTION_URL.includes("YOUR_GOOGLE_FORM")) {
            alert("관리자 설정 필요: constants.ts 파일에서 GOOGLE_FORM_ACTION_URL을 설정해주세요.");
            return;
        }

        setIsSubmitting(true);

        const formBody = new FormData();
        formBody.append(GOOGLE_FORM_ENTRY_IDS.ORGANIZATION, formData.organization);
        formBody.append(GOOGLE_FORM_ENTRY_IDS.NAME, formData.name);
        formBody.append(GOOGLE_FORM_ENTRY_IDS.EVENT_NAME, formData.eventName);
        formBody.append(GOOGLE_FORM_ENTRY_IDS.PHONE, formData.phone);
        
        // 날짜 필드 특별 처리 (구글 폼의 Date 타입 질문은 년/월/일로 쪼개서 보내야 함)
        if (formData.date) {
            const [year, month, day] = formData.date.split('-');
            formBody.append(GOOGLE_FORM_ENTRY_IDS.DATE + '_year', year);
            formBody.append(GOOGLE_FORM_ENTRY_IDS.DATE + '_month', month);
            formBody.append(GOOGLE_FORM_ENTRY_IDS.DATE + '_day', day);
        }

        formBody.append(GOOGLE_FORM_ENTRY_IDS.ATTENDEES, formData.attendees);
        formBody.append(GOOGLE_FORM_ENTRY_IDS.BUDGET, formData.budget);
        formBody.append(GOOGLE_FORM_ENTRY_IDS.REQUEST, formData.request);

        try {
            // mode: 'no-cors'는 중요합니다. 구글 폼은 브라우저에서 직접 AJAX 요청을 공식 지원하지 않기 때문에
            // 응답을 읽을 수는 없지만(opaque), 요청은 성공적으로 전송됩니다.
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                body: formBody,
                mode: 'no-cors'
            });

            alert('문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
            
            // 폼 초기화
            setFormData({
                organization: '',
                name: '',
                eventName: '',
                phone: '',
                date: '',
                attendees: '',
                budget: '',
                request: '',
                privacy: false
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative w-full py-24 bg-[#F1B821] text-black z-20">
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
                    {/* Left Info Column */}
                    <div className="lg:col-span-2 p-8 md:p-12 bg-zinc-900 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-black mb-6 border-b border-gray-700 pb-2">연락처 정보</h3>
                                <div className="space-y-6">
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Phone className="w-4 h-4" /> 전화번호
                                        </div>
                                        <a href="tel:010-8620-2939" className="text-xl md:text-2xl font-bold group-hover:text-[#F1B821] transition-colors">
                                            010.8620.2939
                                        </a>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Mail className="w-4 h-4" /> 이메일
                                        </div>
                                        <a href="mailto:modoomc@naver.com" className="text-xl md:text-2xl font-bold group-hover:text-[#F1B821] transition-colors">
                                            modoomc@naver.com
                                        </a>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <FileText className="w-4 h-4" /> 블로그
                                        </div>
                                        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold group-hover:text-[#F1B821] transition-colors">
                                            blog.naver.com/modoomc
                                        </a>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm font-bold tracking-wider">
                                            <Instagram className="w-4 h-4" /> 인스타그램
                                        </div>
                                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold group-hover:text-[#F1B821] transition-colors">
                                            @modoomc
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code and KakaoTalk Button */}
                        <div className="pt-8 mt-auto w-full">
                            <div className="flex justify-end lg:justify-start mb-4">
                                <img 
                                    src="https://i.ibb.co/xqdt87mJ/212x-M.png" 
                                    alt="KakaoTalk QR Code" 
                                    className="w-32 h-auto rounded-lg"
                                />
                            </div>
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
                                    <label className="block text-sm text-[#F1B821] font-bold mb-2 font-['Noto_Sans_KR']">단체명 *</label>
                                    <input 
                                        type="text" 
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
                                        placeholder="단체명을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#F1B821] font-bold mb-2 font-['Noto_Sans_KR']">담당자명 *</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
                                        placeholder="담당자명을 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-[#F1B821] font-bold mb-2 font-['Noto_Sans_KR']">행사명 *</label>
                                    <input 
                                        type="text" 
                                        name="eventName"
                                        value={formData.eventName}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
                                        placeholder="행사명을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#F1B821] font-bold mb-2 font-['Noto_Sans_KR']">연락처 *</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
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
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">예상 인원</label>
                                    <input 
                                        type="text" 
                                        name="attendees"
                                        value={formData.attendees}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
                                        placeholder="예상 인원을 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">예산 범위</label>
                                <input 
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all placeholder-gray-600"
                                    placeholder="예산 범위를 입력해주세요 (예: 300만원)" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 font-bold mb-2 font-['Noto_Sans_KR']">요청사항</label>
                                <textarea 
                                    rows={4}
                                    name="request"
                                    value={formData.request}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-[#F1B821] focus:ring-1 focus:ring-[#F1B821] text-white transition-all resize-none placeholder-gray-600"
                                    placeholder="행사 성격, 원하는 진행 스타일 등 구체적인 요청사항을 적어주세요"
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-3 py-2">
                                <input 
                                    type="checkbox" 
                                    id="privacy" 
                                    name="privacy"
                                    checked={formData.privacy}
                                    onChange={handleCheckboxChange}
                                    required 
                                    className="w-5 h-5 accent-[#F1B821] cursor-pointer" 
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-300 cursor-pointer select-none">
                                    <span className="font-bold text-white">개인정보 수집 및 이용</span>에 동의합니다. <span className="text-[#F1B821]">*</span>
                                </label>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-black py-4 hover:bg-[#F1B821] transition-colors uppercase tracking-widest rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? '전송 중...' : '문의하기'}
                            </button>
                        </form>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Contact;