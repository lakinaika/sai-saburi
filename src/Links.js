export const menuData = [
    {
        name: 'Home',
        link: '',
        submenu: false
    },
    {
        name: 'Departments & Services',
        link: 'departments-services',
        submenu: true,
        submenus: [
            { name: 'Trauma Care (Emergency)', link: 'trauma-care-emergency' },
            { name: 'Paediatrics & Neonatology', link: 'paediatrics-neonatology' },
            { name: 'Neuroscience', link: 'neuroscience' },
            { name: 'Diabetes and Bariatric Surgery', link: 'diabetes-and-bariatric-surgery' },
            { name: 'Critical Care', link: 'critical-care' },
            { name: 'Medicine & Rehabilitation', link: 'medicine-and-rehabilitation' },
            { name: 'Bone & Joint', link: 'bone-and-join' }
        ]
    },
    {
        name: 'Patients & Visitors',
        link: 'patients-visitors',
        submenu: true,
        submenus: [
            { name: 'Find a Doctor', link: 'find-a-doctor' },
            { name: 'Billing', link: 'billing' },
            { name: 'Patient Guide', link: 'patient-guide' },
            { name: 'Online Reports Portal', link: 'online-reports-portal' },
            { name: 'Make An Appointment', link: 'make-an-appointment' },
            { name: 'Testimonials', link: 'testimonials' },
            { name: 'Visitors', link: 'visitors' },
            { name: 'Timings', link: 'timings' }
        ]
    },
    {
        name: 'Health Info',
        link: 'health-info',
        submenu: true,
        submenus: [
            { name: 'Health Tips', link: 'health-tips' },
            { name: 'Event Bulletin', link: 'event-bulletin' },
            { name: 'Events', link: 'events' },
            { name: 'News Head', link: 'news-head' }
        ]
    },
    {
        name: "Doctors's Profile",
        link: 'doctors-profile',
        submenu: false
    },
    {
        name: 'Reach Us',
        link: 'reach-us',
        submenu: true,
        submenus: [
            { name: 'Phone Directory', link: 'phone-directory' },
            { name: 'Enquiry', link: 'enquiry' },
        ]
    }
];


