'use client';
import Image from "next/image";
import classes from './submitai.module.css';
import { useState } from 'react';
import Modal from "@/components/modal/modal";
import RegistrationForm from "@/components/modal/registerationForm";
import AiSelect from "@/components/AiSelect/AiSelect";
export default function SubmitAi() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputFocus = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={classes.submitai}>
            <div className={classes.submit_container}>
                <input
                    type="text"
                    placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                    className={classes.submit_input}
                    onFocus={handleInputFocus}
                />
                <button type="submit" className={classes.submit_btn} onClick={handleSubmit}>
                    <Image src='/submit.png' width={25} height={25} alt="submit icon" />
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <RegistrationForm />
            </Modal>
            <div className={classes.prompt_container}>
            <AiSelect/>
            </div>
            </div>
    );
}
