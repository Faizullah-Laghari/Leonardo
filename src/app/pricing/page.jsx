'use client'
import React, {useState} from 'react';
import PricingPlan from "@/components/priceTable/page";
import classes from './pricingTable.module.css';
import Modal from '@/components/modal/modal';
import RegistrationForm from '@/components/modal/registerationForm';
export default function PricingTable () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

  return (
    <>
    <div className={classes.price_boxes}>
    <PricingPlan 
        title="Basic" 
        duration="1 week" 
        features={[
          "Generate AI Images and see AI Generated Images",
          "Another feature of the Basic plan"
        ]}
        price="$39"
        onClick={handleSubmit}
      />
      <PricingPlan 
        title="Premium" 
        duration="1 month" 
        features={[
          "Generate unlimited AI Images",
          "Access to premium features",
          "Priority support"
        ]}
        price="$99"
        onClick={handleSubmit}
      />
      <PricingPlan 
        title="Ultimate" 
        duration="1 year" 
        features={[
          "Generate unlimited AI Images",
          "Access to premium features",
          "Priority support"
        ]}
        price="$99"
        onClick={handleSubmit}
      />
      <PricingPlan 
        title="Unlimited" 
        duration="Unlimited"
        features={[
          "Generate unlimited AI Images",
          "Access to premium features",
          "Priority support"
        ]}
        price="$99"
        onClick={handleSubmit}
      />
      </div>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <RegistrationForm />
    </Modal>
    </>
  );
}
