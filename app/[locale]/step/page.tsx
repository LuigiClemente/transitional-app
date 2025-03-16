"use client"
import QuestionModal from "@/components/FormQuestions";
import { GlobalHeader } from "@/components/global-header";
import { Navigation } from "@/components/Navigation";
import { OtherHeader } from "@/components/other-header";
import Stepper from "@/components/Stepper";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Questions(){
    const router = useRouter();
      const searchParams = useSearchParams();
      const token = searchParams.get('token');
      
      // Navigation state
      const [isHovered, setIsHovered] = useState(false);
      const [navOpen, setNavOpen] = useState<boolean>(false);
      const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);
      const [langOpen, setLangOpen] = useState<boolean>(false);
      
      // User state
      const [welcomeBack, setWelcomeBack] = useState(false);
      const [showAgreement, setShowAgreement] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);
    
    return (
    <section>
         <div className='custom-container'>
         <GlobalHeader  user={{firstName : "waleedtahir" , lastName :"Tahir" , id : "Waleed Thair "}}/>
         <OtherHeader noLocalModal={true}  />
         </div>
        <Stepper/>
        
        </section>
    )
}