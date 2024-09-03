import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useTranslation } from 'react-i18next';  

export default function Footer() {
  const { t } = useTranslation(); 

  return (
    <MDBFooter className="text-gray-600 body-font bg-gray-100 py-0">
      <MDBContainer className="flex flex-col items-center">
        <MDBRow className="w-full max-w-7xl px-5">
          <MDBCol lg="3" md="6" className="w-full px-2 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{t('footer.antiDopingResources')}</h2>  
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-blue-500" href="#guidelines">{t('footer.antiDopingGuidelines')}</a></li> 
              <li><a className="text-gray-600 hover:text-blue-500" href="#training">{t('footer.trainingPrograms')}</a></li>  
              <li><a className="text-gray-600 hover:text-blue-500" href="#news">{t('footer.newsUpdates')}</a></li> 
              <li><a className="text-gray-600 hover:text-blue-500" href="#contact">{t('footer.contactInformation')}</a></li> 
            </nav>
          </MDBCol>
          <MDBCol lg="3" md="6" className="w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{t('footer.aboutUs')}</h2>  
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-blue-500" href="#mission">{t('footer.missionStatement')}</a></li>  
              <li><a className="text-gray-600 hover:text-blue-500" href="#approach">{t('footer.ourApproach')}</a></li> 
              <li><a className="text-gray-600 hover:text-blue-500" href="#team">{t('footer.meetTheTeam')}</a></li> 
            </nav>
          </MDBCol>
          <MDBCol lg="3" md="6" className="w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{t('footer.getInvolved')}</h2>  
            <nav className="list-none">
              <li><a className="text-gray-600 hover:text-blue-500" href="#community">{t('footer.joinOurCommunity')}</a></li>  
              <li><a className="text-gray-600 hover:text-blue-500" href="#contribute">{t('footer.contributeContent')}</a></li> 
              <li><a className="text-gray-600 hover:text-blue-500" href="#feedback">{t('footer.feedbackSuggestions')}</a></li> 
            </nav>
          </MDBCol>
          <MDBCol lg="3" md="6" className="w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{t('footer.followUs')}</h2> 
            <div className="flex justify-start space-x-4">
              <a className="text-gray-500" href="https://twitter.com/yourprofile">
                <MDBIcon fab icon="twitter" />
              </a>
              <a className="text-gray-500" href="https://facebook.com/yourprofile">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a className="text-gray-500" href="https://instagram.com/yourprofile">
                <MDBIcon fab icon="instagram" />
              </a>
              <a className="text-gray-500" href="https://linkedin.com/yourprofile">
                <MDBIcon fab icon="linkedin-in" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
        <div className="w-full text-center py-0">
          <p className="text-gray-500 text-sm">© 2024 Anti-Doping Platform —
            <a href="https://twitter.com/yourprofile" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@yourprofile</a>
          </p>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}
