const fs = require('fs');
const path = require('path');

// Define the steps
const steps = [
  {
    folder: "step1",
    key: "step1",
    order: 1,
    translations: {
      en: {
        title: "Receive Your Kit",
        description: "Your personalised test kit is on its way! Inside, you'll find a glucose monitor, a finger-prick lipid test, and a microbiome stool sample kit. Look out for its arrival soon."
      },
      fr: {
        title: "Recevez Votre Kit",
        description: "Votre kit de test personnalisé est en route ! À l'intérieur, vous trouverez un moniteur de glucose, un test lipidique par piqûre au doigt et un kit d'échantillon de selles pour le microbiome. Attendez son arrivée prochainement."
      },
      es: {
        title: "Recibe Tu Kit",
        description: "¡Tu kit de prueba personalizado está en camino! Dentro encontrarás un monitor de glucosa, una prueba de lípidos de punción digital y un kit de muestra de heces para microbioma. Esté atento a su llegada pronto."
      },
      pt: {
        title: "Receba o Seu Kit",
        description: "O seu kit de teste personalizado está a caminho! Dentro, encontrará um monitor de glicose, um teste de lípidos por picada no dedo e um kit de amostra de fezes para microbioma. Fique atento à sua chegada em breve."
      },
      nl: {
        title: "Ontvang Uw Kit",
        description: "Uw gepersonaliseerde testkit is onderweg! Binnenin vindt u een glucosemeter, een vingerprik lipidentest en een microbioom stoelgangmonsterkit. Let op de aankomst binnenkort."
      },
      de: {
        title: "Erhalten Sie Ihr Kit",
        description: "Ihr personalisiertes Testkit ist unterwegs! Darin finden Sie einen Glukosemonitor, einen Lipidtest mit Fingerpikser und ein Stuhlproben-Kit für das Mikrobiom. Achten Sie auf seine baldige Ankunft."
      },
      it: {
        title: "Ricevi Il Tuo Kit",
        description: "Il tuo kit di test personalizzato è in arrivo! All'interno troverai un monitor del glucosio, un test dei lipidi con pungidito e un kit per campioni di feci del microbioma. Attendi il suo arrivo a breve."
      }
    }
  },
  {
    folder: "step2",
    key: "step2",
    order: 2,
    translations: {
      en: {
        title: "Complete the Questionnaire",
        description: "Help us understand your lifestyle and dietary habits by filling out the detailed questionnaire in the app. This is crucial for tailoring your assessment accurately."
      },
      fr: {
        title: "Complétez le Questionnaire",
        description: "Aidez-nous à comprendre votre mode de vie et vos habitudes alimentaires en remplissant le questionnaire détaillé dans l'application. C'est crucial pour adapter précisément votre évaluation."
      },
      es: {
        title: "Completa el Cuestionario",
        description: "Ayúdanos a comprender tu estilo de vida y hábitos alimenticios completando el cuestionario detallado en la aplicación. Esto es crucial para adaptar tu evaluación con precisión."
      },
      pt: {
        title: "Complete o Questionário",
        description: "Ajude-nos a entender o seu estilo de vida e hábitos alimentares preenchendo o questionário detalhado na aplicação. Isto é crucial para adaptar a sua avaliação com precisão."
      },
      nl: {
        title: "Vul de Vragenlijst In",
        description: "Help ons uw levensstijl en voedingsgewoonten te begrijpen door de gedetailleerde vragenlijst in de app in te vullen. Dit is cruciaal voor het nauwkeurig afstemmen van uw beoordeling."
      },
      de: {
        title: "Füllen Sie den Fragebogen aus",
        description: "Helfen Sie uns, Ihren Lebensstil und Ihre Ernährungsgewohnheiten zu verstehen, indem Sie den detaillierten Fragebogen in der App ausfüllen. Dies ist entscheidend für die genaue Anpassung Ihrer Bewertung."
      },
      it: {
        title: "Compila il Questionario",
        description: "Aiutaci a capire il tuo stile di vita e le tue abitudini alimentari compilando il questionario dettagliato nell'app. Questo è fondamentale per personalizzare accuratamente la tua valutazione."
      }
    }
  },
  {
    folder: "step3",
    key: "step3",
    order: 3,
    translations: {
      en: {
        title: "Collect Your Samples",
        description: "Follow the instructions in your kit to collect your glucose, lipid, and microbiome samples. Accurate collection ensures the best results for your assessment."
      },
      fr: {
        title: "Collectez Vos Échantillons",
        description: "Suivez les instructions de votre kit pour recueillir vos échantillons de glucose, de lipides et de microbiome. Une collecte précise garantit les meilleurs résultats pour votre évaluation."
      },
      es: {
        title: "Recolecta Tus Muestras",
        description: "Sigue las instrucciones de tu kit para recolectar tus muestras de glucosa, lípidos y microbioma. Una recolección precisa garantiza los mejores resultados para tu evaluación."
      },
      pt: {
        title: "Recolha as Suas Amostras",
        description: "Siga as instruções no seu kit para recolher as suas amostras de glicose, lípidos e microbioma. Uma recolha precisa garante os melhores resultados para a sua avaliação."
      },
      nl: {
        title: "Verzamel Uw Monsters",
        description: "Volg de instructies in uw kit om uw glucose-, lipiden- en microbioommonsters te verzamelen. Nauwkeurige verzameling zorgt voor de beste resultaten voor uw beoordeling."
      },
      de: {
        title: "Sammeln Sie Ihre Proben",
        description: "Befolgen Sie die Anweisungen in Ihrem Kit, um Ihre Glukose-, Lipid- und Mikrobiomproben zu sammeln. Eine genaue Sammlung gewährleistet die besten Ergebnisse für Ihre Bewertung."
      },
      it: {
        title: "Raccogli I Tuoi Campioni",
        description: "Segui le istruzioni nel tuo kit per raccogliere i campioni di glucosio, lipidi e microbioma. Una raccolta accurata garantisce i migliori risultati per la tua valutazione."
      }
    }
  },
  {
    folder: "step4",
    key: "step4",
    order: 4,
    translations: {
      en: {
        title: "Send Your Samples to the Lab",
        description: "Carefully package your collected samples and send them back to our lab using the pre-paid return envelope. This step is vital for your personalised analysis."
      },
      fr: {
        title: "Envoyez Vos Échantillons au Laboratoire",
        description: "Emballez soigneusement vos échantillons collectés et renvoyez-les à notre laboratoire en utilisant l'enveloppe de retour prépayée. Cette étape est vitale pour votre analyse personnalisée."
      },
      es: {
        title: "Envía Tus Muestras al Laboratorio",
        description: "Empaca cuidadosamente tus muestras recolectadas y envíalas de vuelta a nuestro laboratorio utilizando el sobre de devolución prepagado. Este paso es vital para tu análisis personalizado."
      },
      pt: {
        title: "Envie as Suas Amostras para o Laboratório",
        description: "Embale cuidadosamente as suas amostras recolhidas e envie-as de volta para o nosso laboratório utilizando o envelope de devolução pré-pago. Este passo é vital para a sua análise personalizada."
      },
      nl: {
        title: "Stuur Uw Monsters naar het Lab",
        description: "Verpak zorgvuldig uw verzamelde monsters en stuur ze terug naar ons laboratorium met behulp van de vooraf betaalde retourenvelop. Deze stap is essentieel voor uw gepersonaliseerde analyse."
      },
      de: {
        title: "Senden Sie Ihre Proben an das Labor",
        description: "Verpacken Sie Ihre gesammelten Proben sorgfältig und senden Sie sie mit dem vorfrankierten Rückumschlag an unser Labor zurück. Dieser Schritt ist entscheidend für Ihre personalisierte Analyse."
      },
      it: {
        title: "Invia I Tuoi Campioni al Laboratorio",
        description: "Confeziona con cura i campioni raccolti e rispediscili al nostro laboratorio utilizzando la busta di ritorno prepagata. Questo passaggio è vitale per la tua analisi personalizzata."
      }
    }
  },
  {
    folder: "step5",
    key: "step5",
    order: 5,
    translations: {
      en: {
        title: "Lab Analysis and Assessment",
        description: "Our lab experts will analyse your samples, including continuous glucose monitoring data, lipid profile, and microbiome analysis. Your personalised nutrition assessment will be available shortly in the app, revealing the foods best suited to your body's needs."
      },
      fr: {
        title: "Analyse de Laboratoire et Évaluation",
        description: "Nos experts de laboratoire analyseront vos échantillons, y compris les données de surveillance continue du glucose, le profil lipidique et l'analyse du microbiome. Votre évaluation nutritionnelle personnalisée sera bientôt disponible dans l'application, révélant les aliments les mieux adaptés aux besoins de votre corps."
      },
      es: {
        title: "Análisis de Laboratorio y Evaluación",
        description: "Nuestros expertos de laboratorio analizarán tus muestras, incluidos los datos de monitoreo continuo de glucosa, el perfil de lípidos y el análisis del microbioma. Tu evaluación nutricional personalizada estará disponible en breve en la aplicación, revelando los alimentos más adecuados para las necesidades de tu cuerpo."
      },
      pt: {
        title: "Análise Laboratorial e Avaliação",
        description: "Os nossos especialistas de laboratório analisarão as suas amostras, incluindo dados de monitorização contínua de glicose, perfil lipídico e análise do microbioma. A sua avaliação nutricional personalizada estará disponível em breve na aplicação, revelando os alimentos mais adequados às necessidades do seu corpo."
      },
      nl: {
        title: "Laboratoriumanalyse en Beoordeling",
        description: "Onze laboratoriumexperts zullen uw monsters analyseren, inclusief continue glucosemonitoringgegevens, lipidenprofiel en microbioomanalyse. Uw gepersonaliseerde voedingsbeoordeling zal binnenkort beschikbaar zijn in de app, waarbij de voedingsmiddelen die het beste bij de behoeften van uw lichaam passen, worden onthuld."
      },
      de: {
        title: "Laboranalyse und Bewertung",
        description: "Unsere Laborexperten werden Ihre Proben analysieren, einschließlich kontinuierlicher Glukoseüberwachungsdaten, Lipidprofil und Mikrobiomanalyse. Ihre personalisierte Ernährungsbewertung wird in Kürze in der App verfügbar sein und zeigt die Lebensmittel, die am besten zu den Bedürfnissen Ihres Körpers passen."
      },
      it: {
        title: "Analisi di Laboratorio e Valutazione",
        description: "I nostri esperti di laboratorio analizzeranno i tuoi campioni, inclusi i dati di monitoraggio continuo del glucosio, il profilo lipidico e l'analisi del microbioma. La tua valutazione nutrizionale personalizzata sarà presto disponibile nell'app, rivelando gli alimenti più adatti alle esigenze del tuo corpo."
      }
    }
  }
];

// Create the base directory structure
const stepsDir = path.join('data', 'steps');

// Make sure the base directory exists
if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}

if (!fs.existsSync(stepsDir)) {
  fs.mkdirSync(stepsDir);
}

// Create MDX file content based on language and step
function createMdxContent(step, language) {
  const translation = step.translations[language];
  
  return `---
title: ${translation.title}
order: ${step.order}
key: '${step.key}'
description: ${translation.description}
---

# ${translation.title}

${translation.description}

<userStyle>Normal</userStyle>
`;
}

// Generate all the step files
steps.forEach(step => {
  const stepDir = path.join(stepsDir, step.folder);
  
  // Create step directory if it doesn't exist
  if (!fs.existsSync(stepDir)) {
    fs.mkdirSync(stepDir);
  }
  
  // Create language-specific MDX files
  Object.keys(step.translations).forEach(lang => {
    const mdxPath = path.join(stepDir, `${lang}.mdx`);
    const content = createMdxContent(step, lang);
    
    fs.writeFileSync(mdxPath, content);
    console.log(`Created ${mdxPath}`);
  });
});

console.log('All step files have been generated successfully!');