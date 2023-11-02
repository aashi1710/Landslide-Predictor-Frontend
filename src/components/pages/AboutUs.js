import React , {Fragment} from 'react';
import '../../App.css';

export default function AboutUs() {
  return (
    <Fragment>
     <section className='about'>
       <div className='row'>
        <div className='column'>
          <h2 style={{ color: 'lavender', textDecoration: 'underline', }}>WHY UTTARAKHAND?</h2>
          <p style={{ borderStyle: 'double', borderColor: 'lavender', color: 'lavender'}}>The state of Uttarakhand, one of the eleven territorial entities in the Indian Himalayan area, has seen increased activity of landslides.According to the map, 51% is in high or very high landslide-prone regions, 22-23% in intermediate landslide regions, and 26-27% in low or exceptionally low landslide regions. UTTARAKHAND LANDSLIDE 2013:
Extreme rainfall during 15–17 June 2013 triggered numerous landslides and caused widespread damage and loss of life, with Kedarnath town bearing the brunt of the disaster. 

The abrupt, furious melting of the accumulated snow and ice on the Kedarnath Peak was the primary culprit of the catastrophe in Kedarnath, Uttarakhand. The cloud burst significantly worsened this situation. Four days of relentless rain and snowmelt escalated the floods, which eventually resulted in a major landslide.</p>
        </div>
        
        <div className='column'>
          <h2 style={{ color: 'plum', textDecoration: 'underline'}}>WHY TO DEVELOP SUCH A MODEL?</h2>
          <p style={{ borderStyle: 'double', borderColor: 'plum', color: 'plum'}}>Even though landslide prediction is not a recent development, it is nevertheless very relevant. The issue is how easily an ordinary man can utilize such a service through a simple user interface.</p>

        </div>
        
        <div>
          <h2 style={{ color: 'purple', textDecoration: 'underline'}}>WHY DETECT LANDSLIDES?</h2>
          <p style={{ borderStyle: 'double', borderColor: 'purple', color: 'purple'}}>A landslide is a devastating natural disasters with frequent occurrence and tremendous destructive power. Once it happened, human society, the safety of life and property, and the natural environment would suffer enormous losses. Early warning systems can help to reduce the harm that landslides cause to people, property, and lives. Monitoring landslides is essential for risk analysis and prevention. 


As part of Uttarakhand-specific integrated geodatabases, our project suggests a distinct Deep learning neural network(CNN) and Machine-learning algorithm(LINEAR REGRESSION) approach for predicting natural-terrain landslides.
People can check weather patterns and landslide-prone areas before booking vacations or trips since the model is user-friendly. We will use Google Colab, which is hosted by Jupyter notebook service that requires no setup to use while providing access free of charge to computing resources including GPUs.

Identifying landslide-prone areas can also urge officials, farmers, and locals to encourage terrace farming there.
</p>
        </div>
       </div>
       </section>
    </Fragment>
  );
}
