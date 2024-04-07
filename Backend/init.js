// Example database of mental health issues
const medData = { 
    "conditions": [
      {
        "name": "Depression",
        "symptoms": [
          "Persistent Sadness",
          "Loss Of Interest",
          "Changes in Appetite or Weight",
          "Sleep Disturbances",
          "Fatigue or Loss of Energy",
          "Difficulty Concentrating",
          "Feelings of Worthlessness or Guilt",
          "Suicidal Thoughts"
        ],
        "causes": [
          "Biological Factors: Imbalances in neurotransmitters like serotonin and dopamine",
          "Genetics: Family history of depression",
          "Brain Structure Changes in brain structure or function related to mood regulation",
          "Psychological Factors: Trauma, abuse, chronic stress, or significant life changes",
          "Medical Conditions: Chronic illness, hormonal imbalances, chronic pain",
          "Substance Abuse Alcohol or drug abuse"
        ],
        "treatment": [
          "Therapy: Cognitive-behavioral therapy (CBT), interpersonal therapy, or psychodynamic therapy",
          "Medication: Antidepressant medications like SSRIs or SNRIs",
          "Lifestyle Changes: Regular exercise, healthy eating habits, adequate sleep, and stress management techniques",
          "Support Groups: Joining a support group or engaging in peer support",
          "Mindfulness and Relaxation Techniques: Practices such as mindfulness meditation, yoga, or deep breathing exercises",
          "Hospitalization: In severe cases"
        ]
      },
      {
        "name": "Anxiety",
        "symptoms": [
          "Excessive worry or fear",
          "Feeling restless or on edge",
          "Difficulty concentrating",
          "Muscle tension",
          "Irritability",
          "Sleep disturbances",
          "Panic attacks (in severe cases)"
        ],
        "causes": [
          "Genetics",
          "Brain chemistry",
          "Personality",
          "Traumatic events",
          "Stress",
          "Medical conditions"
        ],
        "treatment": "Various treatments including therapy, medications, relaxation techniques, stress management strategies, and lifestyle changes."
      },
      {
        "name": "Bipolar Disorder",
        "symptoms": {
          "Manic Episodes": [
            "Elevated mood",
            "Increased energy",
            "Rapid speech",
            "Racing thoughts",
            "Decreased need for sleep",
            "Impulsivity",
            "Grandiose beliefs"
          ],
          "Depressive Episodes": [
            "Sadness",
            "Hopelessness",
            "Fatigue",
            "Difficulty concentrating",
            "Changes in appetite or weight",
            "Thoughts of death or suicide"
          ]
        },
        "causes": [
          "Genetics",
          "Brain Structure",
          "Neurochemical Imbalance",
          "Environmental Factors",
          "Substance Abuse"
        ],
        "treatment": "Medication, therapy, and lifestyle changes."
      },
      {
        "name": "Post-Traumatic Stress Disorder",
        "symptoms": [
          "Flashbacks or reliving the traumatic event",
          "Nightmares",
          "Severe anxiety or panic attacks",
          "Avoidance of places, people, or activities that remind one of the trauma",
          "Feeling emotionally numb or disconnected",
          "Hyperarousal (feeling constantly on edge)",
          "Difficulty concentrating",
          "Irritability or anger outbursts",
          "Insomnia or other sleep disturbances"
        ],
        "causes": "Experiencing or witnessing a traumatic event.",
        "treatment": "Therapy, medication, or a combination of both."
      },
      {
        "name": "Schizophrenia",
        "symptoms": [
          "Delusions (false beliefs not based in reality)",
          "Hallucinations (seeing or hearing things that others do not)",
          "Disorganized thinking and speech",
          "Disorganized or abnormal motor behavior",
          "Negative symptoms (reduced emotions, lack of motivation or pleasure, social withdrawal)"
        ],
        "causes": "A combination of genetic, brain chemistry, and environmental factors.",
        "treatment": "Medications, therapy, and support."
      },
      {
        "name": "Obsessive-Compulsive Disorder (OCD)",
        "symptoms": {
          "Obsessions": "Recurrent, persistent, and intrusive thoughts, urges, or images that cause distress or anxiety",
          "Compulsions": "Repetitive behaviors or mental acts performed in response to obsessions, aimed at reducing distress or preventing feared outcomes",
          "Distress and Impairment": "The obsessions and compulsions cause significant distress, consume a significant amount of time, or interfere with daily functioning"
        },
        "causes": [
          "Genetic Factors",
          "Brain Structure",
          "Neurotransmitter Imbalance",
          "Environmental Factors",
          "Learned Behavior"
        ],
        "treatment": [
          "Medication: Selective serotonin reuptake inhibitors (SSRIs)",
          "Psychotherapy: Cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP)",
          "Mindfulness and Relaxation Techniques",
          "Support Groups"
        ]
      },
      {
        "name": "Paranoia",
        "symptoms": [
          "Suspicion or mistrust of others without sufficient reason",
          "Feeling constantly watched or targeted",
          "Belief that others are plotting against you",
          "Excessive sensitivity to criticism",
          "Difficulty confiding in others",
          "Hostility or aggression in response to perceived threats",
          "Social withdrawal or isolation"
        ],
        "causes": "A variety of factors including genetics, brain chemistry, past traumatic experiences, substance abuse, certain medical conditions, and environmental stressors.",
        "treatment": "Therapy and, in some cases, medication."
      },
      {
        "name": "Sleep Disorder",
        "symptoms": [
          "Difficulty falling asleep",
          "Difficulty staying asleep (frequent awakenings)",
          "Excessive daytime sleepiness",
          "Irregular sleep-wake patterns",
          "Feeling unrested after sleep",
          "Sleepwalking or other abnormal behaviors during sleep",
          "Nightmares or disturbing dreams",
          "Breathing difficulties during sleep (such as snoring or sleep apnea)"
        ],
        "causes": [
          "Medical conditions",
          "Mental health disorders",
          "Medications",
          "Substance abuse",
          "Lifestyle factors",
          "Environmental factors"
        ],
        "treatment": "Depends on the specific type and underlying cause of the disorder. It may involve lifestyle changes, therapy, medication, or medical devices."
      }
    ]
  }

  module.exports = {data : medData};