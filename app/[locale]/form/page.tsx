"use client"
import QuestionModal from "@/components/FormQuestions";
import { Navigation } from "@/components/Navigation";
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
           <Navigation 
             navOpen={navOpen} 
             langOpen={langOpen} 
             setLangOpen={setLangOpen} 
             setNavOpen={setNavOpen} 
             isHovered={isHovered} 
             setIsHovered={setIsHovered} 
             isLangBtnHovered={isLangBtnHovered} 
             setIsLangBtnHovered={setIsLangBtnHovered} 
           />
         </div>
        <QuestionModal/>
        
        </section>
    )
}