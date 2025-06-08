'use client';

import { Career } from '@/types/resume';
import { motion } from 'framer-motion';

interface Props {
    career: Career[];
}

export default function CareerSection({ career }: Props) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-semibold text-foreground mb-6">경력</h2>
            <div className="space-y-6">
                {career?.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-background text-foreground rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.company_name}</h3>
                        <p className="text-foreground/80 mb-2">{item.position} | {item.period}</p>
                        <ul className="list-disc list-inside text-foreground/80 space-y-2">
                            {item.tasks.map((task: string, index: number) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {task}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 