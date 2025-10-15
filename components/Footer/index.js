import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SociaMedia,
  SociaMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Investor</FooterLink>
                        <FooterLink to="/signin">Term of services</FooterLink>                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/signin">Contact</FooterLink>
                        <FooterLink to="/signin">Destinations</FooterLink>
                        <FooterLink to="/signin">Support</FooterLink>
                        <FooterLink to="/signin">Sponsorship</FooterLink>                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin">Submit Videos</FooterLink>
                        <FooterLink to="/signin">Ambassadors</FooterLink>
                        <FooterLink to="/signin">Agency</FooterLink>
                        <FooterLink to="/signin">Influencer</FooterLink>                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Business</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                        <FooterLink to="/signin">Youtube</FooterLink> 
                        <FooterLink to="/signin">TwitterX</FooterLink>                      
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SociaMedia>
                <SociaMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>YIDE</SocialLogo>
                    <WebsiteRights>yide @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SociaMediaWrap>
            </SociaMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
