import { LightningElement } from 'lwc';
import PROFILE_IMAGE from '@salesforce/resourceUrl/profileImage';

export default class Profile extends LightningElement {
    fullname = 'Nury Amanmadov';
    title = 'Software Engineer';
    imageDescription = 'Profile image for Nury';
    imageUrl = PROFILE_IMAGE;
}