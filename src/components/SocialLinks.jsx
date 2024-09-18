import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
        </div>
    );
};

export default SocialLinks;
