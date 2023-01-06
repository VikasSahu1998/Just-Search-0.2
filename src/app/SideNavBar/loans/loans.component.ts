import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  LoanCardloops=[
    {
      img:'/assets/cardIcon1.png',
      title:'Multiple &',
      title2:'Customised offering',
      title1:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur. ',
      img1:'/assets/cardIcon2.png',

    },
    {
      img:'/assets/cardIcon3.png',
      title:'Safe & Secure',
      title1:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.',
      img1:'/assets/cardIcon4.png',

    },
    {
      img:'/assets/cardicon5.png',
      title:'Quick loan disbursal',
      title1:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.',
      img1:'/assets/cardicon5.png',

    },
    {
      img:'/assets/cardIcon7.png',
      title:'5555555555',
      title2:'Assistance',
      title1:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.',
      img1:'/assets/cardIcon8.png',

    }
  ]
  images = [

    {
      img: '/assets/homeloanIcon.svg',
      title: 'Home Loan'
    },
    {
      img: '/assets/personalLoanIcon.svg',
      title: 'Personal Loan'
    },
    {
      img: '/assets/creditcardIcon.svg',
      title: 'Credit Cardx'
    },
    {
      img: '/assets/BusinessLoanIcon.svg',
      title: 'Business Loan'
    },
    {
      img: '/assets/carLoanIcon.svg',
      title: 'Car Loan'
    },
    {
      img: '/assets/twoWheelerIcon.svg',
      title: 'Two Wheeler Loan'
    },
    {
      img: '/assets/goldLoanIcon.svg',
      title: 'Gold Loan'
    },
    {
      img: '/assets/MortgageloanIcon.svg',
      title: 'Mortgage Loan'
    },
    {
      img: '/assets/EducationIcon.svg',
      title: 'Education Loan'
    },
  ]
  cp = [
    {
      title: '1. What different types of loans can be availed online?',
      Des:'        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur. '
    },
    {
      title: '2. What is the difference between a secured and unsecured loan?',
      Des: '        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.'},
    {
      title: '3. How to avail of a loan online?',
      Des: '        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur      '
    },
    {
      title: '4. What factors determine the eligibility for a loan?',
      Des: '        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.'
    },
    {
      title: '5. What are the advantages of an online loan application?',
      Des: '        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.'
    },
    {
      title: '6. Is it possible to get a personal loan instantly?',
      Des: '        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa repudiandae vitae quisquam ducimus cum facilis optio tempora ratione pariatur, odit accusantium, voluptatem ullam molestiae, eius obcaecati nam fugiat. Aspernatur.'
    },
  ]
}