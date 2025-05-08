'use client';

import { Skill } from '@/types/resume';
import { motion } from 'framer-motion';

interface Props {
    skills: Skill[];
}

export default function SkillsSection({ skills }: Props) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">기술 스택</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills?.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.category_name}</h3>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                            {category.items.map((item: string, index: number) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 