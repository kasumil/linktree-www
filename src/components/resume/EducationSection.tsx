'use client';

import { Education } from '@/types/resume';
import { motion } from 'framer-motion';

interface Props {
    education: Education[];
}

export default function EducationSection({ education }: Props) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-semibold text-foreground mb-6">교육</h2>
            <div className="space-y-6">
                {education?.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-background text-foreground rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-2">{edu.institution_name}</h3>
                        <p className="text-foreground/80 mb-2">{edu.course_name} | {edu.period}</p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="text-foreground/80"
                        >
                            {edu.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 