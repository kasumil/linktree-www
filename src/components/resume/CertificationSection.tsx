'use client';

import { Certification } from '@/types/resume';
import { motion } from 'framer-motion';

interface Props {
    certifications: Certification[];
}

export default function CertificationSection({ certifications }: Props) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-semibold text-foreground mb-6">자격증</h2>
            <div className="space-y-6">
                {certifications?.map((certification, index) => (
                    <motion.div
                        key={certification.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-background text-foreground rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-2">{certification.name}</h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-foreground/80 mb-2"
                        >
                            {certification.issuer} | {new Date(certification.issue_date).toLocaleDateString('ko-KR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            })}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="text-foreground/80"
                        >
                            {certification.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 