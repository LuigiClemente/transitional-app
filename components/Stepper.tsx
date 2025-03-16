'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepFive } from './StepFive'
import { useStepper } from '@/hooks/useSteppers'

const Stepper = () => {
  const router = useRouter()
  const currentStep = 1;
  const stepperData = useStepper();
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const locale = 'en';
  useEffect(() => {
    // if (currentStep === 5) {
    //   // If the current step is 5, navigate to another page using Next.js router
    //   router.push('/')// Replace '/your-target-page' with the actual target page path

    // }
  }, [currentStep, router])

  const greens = [] as number[]
  const oranges = [] as number[]
  const grays = [] as number[]
  for (let i = 1; i <= currentStep; ++i) {
    greens.push(i)
  }
  for (let i = currentStep + 2; i <= 5; ++i) {
    grays.push(i)
  }
  oranges.push(currentStep + 1)

  return (

    <section className="mx-auto w-full max-w-screen-xl items-center justify-between gap-x-4 px-4 md:justify-normal md:px-8 py-3 mb-10 stepper">
      <style>
        {`
      .step-border {
        transition: border-color 2s;
      }

      .color {
        color: gray;
      }
      
      /* Mobile stepper styles */
      @media (max-width: 768px) {
        .mobile-stepper-container {
          position: relative;
          padding-left: 20px;
        }
        
        /* Set a common line */
        .mobile-stepper-container::before {
          content: '';
          position: absolute;
          left: 14px;
          top: 18px;
          height: 100%;
          width: 4px;
          background-color: #e5e5e5;
          z-index: 0;
        }
        
        .step-mobile-item {
          position: relative;
          margin-bottom: 40px;
          padding-top: 5px;
        }
        
        .step-mobile-indicator {
          position: absolute;
          left: -14px;
          top: 15px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          z-index: 2;
          border: 3px solid white;
        }
        
        .step-mobile-header {
          position: relative;
          margin-bottom: 15px;
          font-weight: bold;
          padding-left: 20px;
        }
        
        .step-mobile-content {
          margin-left: 20px;
          padding: 15px;
          border-radius: 8px;
          border-width: 2px;
          border-style: solid;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
      
      ${greens
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: #159789;
      }
      .color${i} {
        color: #159789;
      }
      @media (max-width: 768px) {
        .step${i}-mobile-indicator {
          background-color: #159789;
        }
        .step${i}-mobile-content {
          border-color: #159789;
        }
        .step${i}-section::before {
          background-color: #159789 !important;
        }
      }
      `
        )
        .join('')}
      ${oranges
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: #fc710b;
      }
      .color${i} {
        color: #fc710b;
      }
      @media (max-width: 768px) {
        .step${i}-mobile-indicator {
          background-color: #fc710b;
        }
        .step${i}-mobile-content {
          border-color: #fc710b;
        }
        .step${i}-section::before {
          background-color: #fc710b !important;
        }
      }
      `
        )
        .join('')}
      ${grays
        .map(
          (i) => `
      .step-border.step${i} {
        --tw-text-opacity: 1;
        border-color: gray;
      }
      .color${i} {
        --tw-text-opacity: 1;
        color: gray;
      }
      @media (max-width: 768px) {
        .step${i}-mobile-indicator {
          background-color: gray;
        }
        .step${i}-mobile-content {
          border-color: gray;
        }
        .step${i}-section::before {
          background-color: gray !important;
        }
      }
      `
        )
        .join('')}
    `}
      </style>
      <div className='mt-10 mobile-stepper-container'>

        <StepOne stepRefs={stepRefs} stepperData={stepperData} />
        <StepTwo
          stepRefs={stepRefs}
          router={router}
          stepperData={stepperData}
        />
        <StepThree
          stepRefs={stepRefs}
          router={router}
          stepperData={stepperData}
        />
        <StepFour
          stepRefs={stepRefs}
          router={router}
          stepperData={stepperData}
        />
        <StepFive
          stepRefs={stepRefs}
          router={router}
          stepperData={stepperData}
        />
      </div>

    </section>

  )
}

export default Stepper
