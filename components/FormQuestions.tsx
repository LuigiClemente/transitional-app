"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalSubmit from './ModalSubmit';
import Question from './Question';
import useLocalStorage from 'use-local-storage';
import { useTranslations } from 'next-intl';
import { useQuestions } from '@/hooks/useQuestions';
import { REGISTER_SCHEMA } from '@/lib/schema';

const QuestionModal = ({ checkerRoute=()=>{} }) => {
  const QUESTION_DATA = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useLocalStorage('currentQuestion', 0);
  const [answers, setAnswers] = useLocalStorage<any>('answers', {});
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
  const [haveWeightGoal, setHaveWeightGoal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [stepValueChecker, setStepValueChecker] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const questionsList = useMemo(() => {
    if (!QUESTION_DATA) return [];
    return QUESTION_DATA.filter(question => 
      !((!isFemale && question.gender === 'female') || (question.name === 'weightGoal' && !haveWeightGoal))
    );
  }, [QUESTION_DATA, isFemale, haveWeightGoal]);

  const numOfQuestion = questionsList.length;

  // Initialize form with any type to avoid TypeScript errors
  const { register, handleSubmit, formState: { errors }, getValues, reset, setValue } = useForm({
    resolver: yupResolver(REGISTER_SCHEMA),
  }) as any;

  // Effect to handle currentQuestion bounds
  useEffect(() => {
    if (questionsList.length > 0) {
      if (currentQuestion >= questionsList.length) {
        setCurrentQuestion(questionsList.length - 1);
      }
      setIsFirstStep(currentQuestion === 0);
      setIsLastStep(currentQuestion === questionsList.length - 1);
    }
  }, [questionsList, currentQuestion]);

  // Effect to set form values from answers - using any to bypass TypeScript
  useEffect(() => {
    Object.keys(answers).forEach((name: any) => {
      setValue(name as any, answers[name]);
    });
  }, [setValue, answers]);

  const handleNext = () => {
    if (!questionsList.length) return;

    const formValues = getValues();
    const currentQuestionName = questionsList[currentQuestion]?.name;
    
    if (!currentQuestionName || !formValues[currentQuestionName]) {
      setIsError(true);
      return;
    }
    setIsError(false);

    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [currentQuestionName]: formValues[currentQuestionName],
    }));

    setCurrentQuestion((current: any) => {
      const nextQuestion = current + 1;
      setIsLastStep(nextQuestion === questionsList.length - 1);
      setIsFirstStep(false);
      return Math.min(questionsList.length - 1, nextQuestion);
    });
  };

  const handlePrev = () => {
    setCurrentQuestion((current: any) => {
      const newCurrent = Math.max(0, current - 1);
      setIsFirstStep(newCurrent === 0);
      setIsLastStep(newCurrent === questionsList.length - 1);
      return newCurrent;
    });
  };

  const handleOptionClick = (option: any, name: any) => {
    setStepValueChecker(option);
    if (name === 'gender') {
      setIsFemale(option === 'Female');
    }
    if (name === 'haveWeightGoal') {
      setHaveWeightGoal(option === 'Yes');
    }
  };

  const handleStepper = (index: any) => {
    if (index >= 0 && index < questionsList.length) {
      setStepValueChecker(null);
      setCurrentQuestion(index);
      setIsLastStep(index === questionsList.length - 1);
      setIsFirstStep(index === 0);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const t = useTranslations('Questions');

  const onSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);
      
      // Get user's email from localStorage
      const userEmail = localStorage.getItem('email');
      if (!userEmail) {
        throw new Error('User email not found');
      }

      // Format answers for ticket body
      const formattedAnswers = Object.entries(values)
        .map(([question, answer]) => `${question}: ${answer}`)
        .join('\n');

      // Create ticket with form data
    //   const ticketResponse = await authService.createTicket(userEmail);
      
      // Update ticket with form answers
    //   if (ticketResponse.id) {
    //     await HTTPClient.getInstance().client.put(
    //       `tickets/${ticketResponse.id}`,
    //       {
    //         article: {
    //           subject: 'Form Answers',
    //           body: formattedAnswers,
    //           type: 'note',
    //           internal: false,
    //         },
    //       },
    //       {
    //         headers: {
    //           Authorization: `Token token=${authService.getToken()}`,
    //         },
    //       }
    //     );
    //   }

      // Reset form state
      setCurrentQuestion(0);
      setAnswers({});
      reset();
      
      setModalVisible(true);

      // Execute additional callback if provided
      if (checkerRoute) {
        await checkerRoute();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Guard against empty questionsList
  if (!questionsList.length) {
    return <div className="flex justify-center items-center p-4">Loading questions...</div>;
  }

  const currentQuestionData = questionsList[currentQuestion];
  
  // Guard against undefined currentQuestionData
  if (!currentQuestionData) {
    return <div className="flex justify-center items-center p-4">Error loading question data</div>;
  }

  return (
    <>
      <form
        className="flex w-full max-w-xl flex-col justify-between rounded bg-darkGreen dark:bg-blackDark questions mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Question
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          type={currentQuestionData.type}
          image={currentQuestionData.image}
          register={register}
          error={errors}
          stepValueChecker={stepValueChecker}
          name={currentQuestionData.name}
          handleOptionClick={handleOptionClick}
          isError={isError}
          currentQuestion={currentQuestion}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
          numOfQuestion={numOfQuestion}
        />

        <div className='p-3'>
          {!isLastStep ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary w-full bg-[#2ae8d3]"
              disabled={isSubmitting}
            >
              {t('Continue')}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full bg-[#2ae8d3]"
            >
              {isSubmitting ? t('Submitting...') : t('Submit')}
            </button>
          )}
        </div>
      </form>
      {modalVisible && (
        <ModalSubmit
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          handleSave={checkerRoute}
        />
      )}
    </>
  );
};

export default QuestionModal;