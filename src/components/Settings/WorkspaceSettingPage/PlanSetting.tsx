import React from 'react';

const PlanSetting = () => {
  return (
    <div className='account-info__block'>
      <h2 className='text-[23px]'>Plan & Billing</h2>
      <p className='mb-[20px] mt-[20px]'>This workspace is on the free sandbox plan.</p>
      <span>Want to increase limits? The Starter Plan is $249 per month and unlocks key features to jumpstart your project, including:</span>
      <ul className='list-disc pl-[30px]'>
        <li>Private Data</li>
        <li>5,000 images</li>
        <li>5 collaborators</li>
        <li>1,000 hosted inference API calls per month</li>
        <li>2 hosted model trainings per month</li>
        <li>5x Augmentation Variants per image</li>
        <li>Enhanced Augmentations</li>
        <li>Dataset Health Check</li>
      </ul>
      <p className='mt-[10px] mb-[20px]'>Join over 100,000 engineers and machine learning teams using Roboflow in their computer vision projects.</p>
      <button className='px-[16px] py-[8px] bg-[darkblue] text-white rounded hover:bg-[#6d6bd1] transition-all active:bg-[darkblue]'>
        Upgrade Plan
      </button>
    </div>
  );
};

export default PlanSetting;