import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';


// @ViewChild('carousel', { static: false }) carousel!: ElementRef;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  visibleProjects: any[] = [];
  startIndex = 0;
  projectsToShow = 3;
  certificates = [
    {
      title: 'Data Analytics Job Simulation Certificate by Deloitte',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3WjHVkpudVmvhixkyWHw3zOzmpoqeVUZcXJBNYPU4MmewOPN7-lk1oLckokikVoNGug&usqp=CAU',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Data%20Analytics%20Job%20Simulation%20Certificate%20by%20Deloitte.jpg?raw=true',
    },
    {
      title: 'Career Essentials in Business Analysis by Microsoft and LinkedIn',
      thumbnail: 'https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Career%20Essentials%20in%20Business%20Analysis%20by%20Microsoft%20and%20LinkedIn-Certificate.jpg?raw=true',
    },
    {
      title: 'Business Analyst Certification',
      thumbnail: 'https://img-c.udemycdn.com/user/200_H/272579034_be35_2.jpg',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Lopita%20Mishra%20-%20Business%20Analyst%20Certification.jpg?raw=true',
    },
    {
      title: 'Microsoft Power BI Desktop For Business Intelligence',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldFOFoxTe-TWTU4RP5FbR57e2uvljrnEdyrrb_Bk6OAVvfjnYHATTSMEyBpbNZwq1JlI&usqp=CAU',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Power%20Bi%20for%20%20BI%20(Maven)-Certificate.jpg?raw=true',
    },
    {
      title: 'Project Management Essentials Certified',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsP28-u-HHTxnP8ffB1Mi3YAtFyvYNheRpw&s',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/PMEC%20Certificate.jpg?raw=true',
    },
    {
      title: 'Six Sigma Yellow Belt',
      thumbnail: 'https://play-lh.googleusercontent.com/4wEASxZEl-5mbu7QKt-bcw1EZt9d67vMUz_OTWcyMPS8_u5IaEYyYZ45IqrEE6Im6gIm',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/SixSigmaYellowbelt-Certificate.jpg?raw=true',
    },
    {
      title: 'Business Analysis and Process Management',
      thumbnail: 'https://www.aidoos.com/media/aidoos_product/Coursera.png',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Business%20Analysis%20&%20Process%20Management-Certificate.jpg?raw=true',
    },
    {
      title: 'SQL for Data Science',
      thumbnail: 'https://i.ytimg.com/vi/04JpfelD8mU/sddefault.jpg',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/SQL-Data-Science-Certificate.jpg?raw=true',
    },
    {
      title: 'Data Analytics & Visualization: Using Excel and Python',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeHK0UxO2iU4pyDff204SsbHQEpzADk_JtqbeXKsySQGWnYKnG4vroGakDbmpwcwq6Eg&usqp=CAU',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/data%20analysis%20using%20excel%20and%20python-Certificate.jpg?raw=true',
    },
    {
      title: 'Professional Diploma in Agile and Scrum',
      thumbnail: 'https://img-c.udemycdn.com/user/200_H/272579034_be35_2.jpg',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Agile%20And%20Scrum%20Certificate.jpg?raw=true',
    },
    {
      title: 'Scrum Fundamentals Certified',
      thumbnail: 'https://play-lh.googleusercontent.com/4wEASxZEl-5mbu7QKt-bcw1EZt9d67vMUz_OTWcyMPS8_u5IaEYyYZ45IqrEE6Im6gIm',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/ScrumFundamentalsCertificate.jpg?raw=true',
    },
    {
      title: 'Lean Six Sigma White Belt Certified',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsP28-u-HHTxnP8ffB1Mi3YAtFyvYNheRpw&s',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Lean%20Six%20Sigma%20White%20Belt-Certificate.jpg?raw=true',
    }, 
    {
      title: 'Business Intelligence using Power BI',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_ogdXVw6b1A_ydy-jEbfTHsgMfQU5nUnsLRrPcUHTaFmahpOuUh0_GJbY5T5QmO1I90&usqp=CAU',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Bi%20Using%20powerbi%20(skillnation)-Certificate.jpg?raw=true',
    }, 
    {
      title: 'Introduction to Data Analysis using Microsoft Excel',
      thumbnail: 'https://www.aidoos.com/media/aidoos_product/Coursera.png',
      fullImage: 'https://github.com/MLopita/portfolio/blob/master/Certificates/Coursera%20ms%20excel%20for%20DA-certificate.jpg?raw=true',
    },
    // Add more certificates here
  ];

  selectedCertificate: any = null;

  viewCertificate(cert: any) {
    this.selectedCertificate = cert;
  }

  closeCertificate() {
    this.selectedCertificate = null;
  }

  certificateStartIndex = 0;
  visibleCount = 2; // Number of certs visible at a time

  certificatesToShow = 2;

  setCertificatesToShow() {
    const width = window.innerWidth;
    if (width <= 600) {
      this.certificatesToShow = 1;
    } else if (width <= 992) {
      this.certificatesToShow = 3;
    } else {
      this.certificatesToShow = 5;
    }
  }

  get visibleCertificates() {
    return this.certificates.slice(
      this.certificateStartIndex,
      this.certificateStartIndex + this.certificatesToShow
    );
  }

  nextCertificate() {
    if (this.certificateStartIndex < this.certificates.length - this.certificatesToShow) {
      this.certificateStartIndex++;
    }
  }

  prevCertificate() {
    if (this.certificateStartIndex > 0) {
      this.certificateStartIndex--;
    }
  }

  get visibleRange(): string {
    const start = this.certificateStartIndex + 1;
    const end = Math.min(this.certificateStartIndex + this.certificatesToShow, this.certificates.length);
    return start === end ? `${start}` : `${start}–${end}`;  
  }
  get projectVisibleRange(): string {
    const start = this.startIndex + 1;
    const end = Math.min(this.startIndex + this.projectsToShow, this.projects.length);
    return start === end ? `${start}` : `${start}–${end}`;
  }
  get projectRangeLabel(): string {
    const total = this.projects.length;
    return `${this.projectVisibleRange} of ${total}`;
  }



ngOnInit() {
  this.setProjectsToShow();
  this.updateVisibleProjects();
  this.setCertificatesToShow();
  window.addEventListener('resize', this.onResize.bind(this));
}

onResize() {
  this.setProjectsToShow();
  this.updateVisibleProjects();
  this.setCertificatesToShow();
}

setProjectsToShow() {
  const width = window.innerWidth;
  if (width <= 600) {
    this.projectsToShow = 1;
  } else if (width <= 992) {
    this.projectsToShow = 2;
  } else {
    this.projectsToShow = 3;
  }
}

updateVisibleProjects() {
  this.visibleProjects = this.projects.slice(this.startIndex, this.startIndex + this.projectsToShow);
}

nextSlide() {
  if (this.startIndex + this.projectsToShow < this.projects.length) {
    this.startIndex++;
    this.updateVisibleProjects();
  }
}

prevSlide() {
  if (this.startIndex > 0) {
    this.startIndex--;
    this.updateVisibleProjects();
  }
}

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   GitHubCalendar(".calendar", "suranjanachary", { responsive: true });
    // }, 1000);  
  }
  isDarkMode: boolean = false;
  contactForm!: FormGroup;


  constructor(private themeService: ThemeService, private fb: FormBuilder, private router: Router) {
    this.isDarkMode = this.themeService.isDarkMode;

    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({ 
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Your message has been sent successfully!');
      this.contactForm.reset();
    }
  }

  isSidebarOpen = false;

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  downloadResume() {
    const resumeUrl = "https://drive.google.com/file/d/1-vYaHBhpXAN4s5nJN_5pWHoQCBU_90Ig/view?usp=drivesdk"; // Relative path
  
    // Open in a new tab
    const newTab = window.open(resumeUrl, "_blank");
    if (newTab) {
      newTab.opener = null;
    }
  
    // Force download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Lopita_Mishra_Resume.pdf"; // Set download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  projects = [
    //Flipkart Project 
    {
      title: 'Flipkart Mobile Data Analysis – Power BI Dashboard',
      objective: "Analyze smartphone listings from Flipkart to understand brand presence, pricing tiers, and popular specifications. Identify trends in average ratings, discounts, and profit margins to support pricing and marketing strategies. Deliver an interactive Power BI dashboard with dynamic filters and custom DAX measures for detailed exploration.",
      summary: "The project uses scraped Flipkart data containing over 4,000 mobile listings across 17 brands. Price segmentation was performed to classify phones into low, mid, and premium tiers based on original prices. Excel was used for preliminary cleaning (removing nulls, standardizing columns), followed by Power BI for dashboard development. Custom DAX measures were formulated to calculate average discount %, profit %, and ratings. The final dashboard enables detailed drill-downs by brand, price tier, RAM-storage combinations, and color preferences",
      image: 'https://assets.entrepreneur.com/content/3x2/2000/20180511063849-flipkart-logo-detail-icon.jpeg',
      techStack: 'Microsoft Excel (Preliminary Data Cleaning), Power BI (Data Modeling, DAX Calculations, Visualizations)',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Flipkart Mobile Dashboard',
          images: [
            'https://raw.githubusercontent.com/MLopita/portfolio/refs/heads/master/Flipkart%20Sales%20Analysis%20Dashboard_page-0001.jpg',
          ],
          points: [
            'KPI Cards for average rating, discount %, and selling price across the dataset.',
            'Pie Chart for distribution of mobile phones by price range (Low, Mid, Premium).',
            'Bar Chart comparing original vs. selling price for top brands.',
            'Stacked Bar Chart showing price range coverage by brand to identify who serves all segments.',
            'Column Chart for frequency of RAM + Storage combinations across listings.',
            'Donut Chart displaying model count by brand.',
            'Slicer Filters to explore data by brand, price tier, and color.',
          ]
        },
        {
          title: 'Data Pane / Model View',
          images: [
            'https://raw.githubusercontent.com/MLopita/portfolio/refs/heads/master/DAX.png',
          ],
          points: [

          ]
        },
      ],
      insights: [
        'Samsung had the highest number of listings, offering phones across all price ranges.',
        'Most listings were in the mid-range segment (₹10,000–₹25,000), highlighting demand sensitivity.',
        'Common configurations included 6 GB RAM + 128GB storage, and Black and Blue were the most listed colors.',
        'Calculated a profit gap of up to 40% between original and selling price for certain models.',
        'Enabled brand-level insights for price strategy, specification offerings, and potential repositioning'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/1v5OrHr9MvgctDIbwT8fxj1obh4hU9HEn/view?usp=drivesdk" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1_R0lYSwHm-B3WvwJ4vY0cE5svcB9HNEb/view?usp=drivesdk" }
      ]

    },
    //Green Beverage Project 
    {
      title: 'Green Beverage Sales performance Dashboard ',
      objective: 'The objective of this project is to analyze sales data from various sources (Sales, Customer, Product, Region) to derive meaningful insights. The dashboard highlights key performance indicators (KPIs), sales trends, customer segmentation, and volume forecasts. The goal is to provide actionable insights that help businesses optimize their sales strategies, manage customer relationships, and assess product performance.',
      summary: 'This project involves integrating sales data across multiple sources, including Sales, Customer, Region, Product, and Sales Person tables. The data is cleaned and transformed in Excel, then loaded into Power BI for visualization. Key metrics such as total sales, sales by region, free goods calculation, and sales person performance are analyzed. The project also includes interactive elements like slicers to filter data based on region, product category, or time period',
      image: 'https://img.freepik.com/free-photo/matcha-glass-with-ice-created-with-generative-ai-technology_185193-162611.jpg?semt=ais_hybrid&w=740',
      techStack: 'SQL Server, Power BI, ETL, Data Visualization, Automation',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Dashboard',
          images: [
            'https://drive.google.com/file/d/1NmcTO-Fh-nBiY36KugEwhIQQ4n8bGXcN/view?usp=drivesdk',
          ],
          points: [
            'Sales Trends: Line charts to display sales over time by region and product category.',

            'Regional Sales Distribution: Bar charts showing total sales by region and product.',

            ' Customer Segmentation: Pie charts representing sales volume by customer type.',

            'Top Products and Sales People: Bar charts ranking products and sales personnel by sales performance.',

            'Free Goods Calculation: A card visual showing total free goods allocated based on discount percentages.'
          ]
        },
        {
          title: 'Data/Model View',
          images: [
            'https://drive.google.com/file/d/1g2M77s7hf0JqfWvm_UNMyCRDC4vQRrN8/view?usp=drivesdk',
          ],
        },
      ],
      insights: [
        'Sales Trends: Identified peak sales periods and seasonal trends, allowing for better inventory and staffing decisions.',

        'Regional Sales Performance: Pinpointed high-performing regions and underperforming areas, leading to targeted marketing campaigns.',

        'Customer Segmentation: Discovered that certain customer types receive higher discounts and drive more sales, influencing future sales strategies.',

        'Product Performance: Helped identify top-selling products, which can inform restocking and marketing efforts.',

        'Sales Team Effectiveness: Recognized top-performing salespeople, which aids in incentive distribution and performance reviews.',

        'By providing a holistic view of the sales process, this project enables data-driven decision-making for optimizing sales strategies and customer management.'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/1k6tsfW5sjBxOjEF0ZTkah3HNNVT9nJVK/view?usp=drivesdk" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1g1E5ZO8tJtDtcoj6Xkx97x8Up41WoQvP/view?usp=drivesdk" }
      ]
    },
    //Adventure Works Cycle Project
    {
      title: 'Adventure Works Cycle Sales Dashboard',
      objective: 'To design an interactive Power BI dashboard for Adventure Works Cycle that provides in-depth sales analytics and customer insights, enabling stakeholders to make data-driven decisions and identify key business opportunities.',
      summary: 'This project focused on transforming Adventure Works’ raw sales and customer data into a visually compelling and insightful dashboard. The data included customer demographics, product categories, order details, and regional sales using Power Query, the data was cleaned and reshaped, followed by creating a robust data model in Power BI. DAX was used to calculate key performance metrics and enable interactive features like dynamic filtering, slicers, and tooltips. The final dashboard offered stakeholders a high-level overview as well as drill-down capabilities into customer, regional, and product-level performance',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkFKa1KJ9bmOHNC3cgvj7H5wIvTYlVAR3zw&s',
      techStack: 'Power BI, Power Query, DAX, SQL Server, Excel, Data Modeling, Data Visualization',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Sales Overview',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/Exec%20Dashboard.png',
          ],
          points: [
            'Total Revenue: $24.9M | Total Orders: 25.2K | Total Profit: $10.5 M | Return Rate: 2.2%',
            'Year-wise and Month-wise Revenue Trend',
            'Top 10 Products with Most Ordered and Most Returned Product Type'
          ]
        },
        {
          title: 'Customer  Analysis',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/Customer%20Details.png',
          ],
          points: [
            'Total Customers: 17.42K | Revenue per Customer: $1,431 | Total Revenue (Top 100): $6.16M',
            'Customer-wise revenue trend (2020–2022)',
            'Orders by Income Level and Occupation Level',
            'Top Customer – Mr. Maurice Shan ($12.4K, 6 Orders)',
            'Insight: Highest revenue from Skilled Manual segment – Ruben Suarez ($4.68K)'
          ]
        },
        {
          title: 'Product Analysis',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/Product%20Details.png',

          ],
          points: [
            'Selected Product: Road Tire Tube | Monthly Orders: 213 | Revenue: $1,668 | Profit: $1,044',
            'Monthly Orders, Revenue, and Profit vs Target',
            'Profit Trend with Price Adjustment Simulation',
            'Product Metric Selector: Orders, Revenue, Profit, Return, Return Rate'
          ]
        },
        {
          title: 'Map Visual ',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/Map%20Visuals.png'
          ],
          points: [
            'Countries By Total orders',
          ]
        },
        {
          title: 'Key Influencers',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/key%20Influencers.png'
          ],
          points: [

          ]
        },
        {
          title: 'Decomposition Tree',
          images: [
            'https://raw.githubusercontent.com/MLopita/Adventure-works-Cycle-/refs/heads/main/Decomposition%20Tree.png'
          ],
          points: [

          ]
        },
        {
          title: 'Data Pane/ Model View',
          images: [
            'https://github.com/MLopita/Adventure-works-Cycle-/blob/main/Data1.png?raw=true',
            'https://github.com/MLopita/Adventure-works-Cycle-/blob/main/Data2.png?raw=true',
            'https://github.com/MLopita/Adventure-works-Cycle-/blob/main/Date3.png?raw=true',
            'https://github.com/MLopita/Adventure-works-Cycle-/blob/main/Model%20View.png?raw=true'
          ],
          points: [

          ]
        }
      ],
      insights: [
        'Identified top-performing products and high-revenue customer segments.',
        'Highlighted underperforming regions to help adjust sales strategies.',
        'Streamlined reporting by creating a reusable and scalable dashboard model.',
        'Empowered the business team to monitor KPIs in real-time without manual effort.'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/1hkvSfCGSZNNLZ3Y8C6aUEORTKsvnWTFC/view?usp=drivesdk" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1X4OIQIA7FbMlbrxfTfi7236zEfiHKS1f/view?usp=drivesdk" }
      ]
    },
    //ETL Pipeline Project
    {
      title: 'ETL Pipeline: IT Services Market Share Analysis (2019–2023)',
      objective: 'To build a robust ETL pipeline that automates the extraction, transformation, and loading of IT services market data into a MySQL database, followed by interactive analysis in Power BI to uncover trends and insights at vendor, region, and segment levels.',
      summary: 'This project focused on designing and implementing an end-to-end ETL pipeline for IT services market data spanning the years 2019 to 2023. The source data, stored in multiple CSV files, was cleaned, transformed, and loaded into a centralized MySQL database using Python. Key components of the project included standardizing column names, handling null values, transforming currency formats, and optimizing query performance for large datasets. The final data was visualized in Power BI to track vendor-wise revenue trends, regional growth, and market segment performance',
      image: 'https://images.icon-icons.com/2699/PNG/512/gartner_logo_icon_170114.png',
      techStack: 'Power BI, Power Query, DAX, Python, Pandas, MySQL, SQL, Excel, Data Modeling, Data Visualization, ETL Automation',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'IT Services Market Dashboard',
          images: [
            'https://github.com/MLopita/IT-Services-Market-Share-ETL-Pipeline/blob/main/Power%20BI%20Dashboard/Dashboard.png?raw=true',
          ],
          points: [
            'KPIs: Total Revenue (₹11.77M), YoY Growth (15.39%), Vendor Share (96.89%), Vendor Revenue (₹11.41M)',
            'Year-wise slicer, Region and Vendor filters',
            "YoY Growth %, Cumulative and Running Total Revenue Trends",
            'Country-wise Revenue of Top 10 Markets',
            'Vendor Share % among Top 5 Vendors (Donut Chart)',
            'Revenue by IT Service Segment (Bar Chart)',
            'Vertical Contribution % (Treemap)'
          ]
        },
        {
          title: 'Data Pane/ Model View',
          images: [
            'https://github.com/MLopita/portfolio/blob/master/DAX,Model-Etl%20pipeline.png?raw=true',
          ],
          points: [

          ]
        },
        {
          title: 'ETL Architecture Flowchart',
          images: [
            'images/Blank diagram_page-0001.jpg',
          ],
          points: [

          ]
        }
      ],
      insights: [
        'Centralized 5-year IT market data from multiple sources.',
        'Enabled deep dive into vendor revenue share, vertical contributions, and regional trends.',
        'Enhanced stakeholder reporting with real-time filtering and visual storytelling.',
        'Reduced manual efforts with reusable, automated scripts for ETL.'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/19vr48cWLKitA2Y6FclYuLeibg5uwRxjQ/view?usp=drivesdk" },
        { name: "PPT", url: "https://docs.google.com/presentation/d/1k2C96sXi-eCeSL5WUWjojyH5HlqySClZ/edit?usp=drivesdk&ouid=102164671172485530304&rtpof=true&sd=true" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1X0acqCvGMmvkqtON5rY9W7I7FBtJLF4S/view?usp=drivesdk" }
      ]
    },
    //Sales Insight ATILQ Project
    {
      title: 'Sales Insight Dashboard – ATILQ',
      objective: "To develop an automated, interactive Sales Insight Dashboard using Power BI and SQL Server that enables ATILQ's sales team to monitor real-time performance, track KPIs, and make data-driven strategic decisions with reduced manual effort.",
      summary: "This project involved the end-to-end development of a dynamic sales dashboard powered by ETL automation, centralized SQL storage, and rich Power BI visuals. The sales data was collected from multiple sources including CRM systems and Excel spreadsheets, then cleaned and transformed through automated ETL processes. The refined data was stored in SQL Server, from which Power BI pulled data for real-time reporting.The dashboard allowed users to explore key performance indicators, regional sales trends, product-wise revenue distribution, and cost-saving insights, by minimizing manual work and enabling efficient monitoring, the solution empowered the sales team to focus more on strategy and less on reporting",
      image: 'https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=1024x1024&w=is&k=20&c=VpSNiVam6Fw3egrJYnP28mEEAXyCjFRjqV_k4PK5S04=',
      techStack: 'SQL Server, Power BI, ETL, Data Visualization, Automation',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Profit Analysis',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Profit%20Analysis.png?raw=true',
          ],
          points: [
            'Revenue: ₹142.22M | Sales Quantity: 350K | Profit: ₹2.06M',
            'City-wise profit and revenue visuals',
            'Monthly trend (line chart) and customer performance'
          ]
        },
        {
          title: 'Performance Insight',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Performance%20Insights.png?raw=true',
          ],
          points: [
            'Market-wise revenue contribution',
            'Profit Target Slider',
            'Bar & Line combo chart for region performance',
            'Matrix showing customer-wise profit'
          ]
        },
        {
          title: 'Data Pane / Model View',
          images: [
            'https://github.com/MLopita/portfolio/blob/master/DAX%20and%20Model%20View-Atilq.png?raw=true'
          ],
          points: [
            // add points if required
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/1OwIXD66RXG2V3O6KGf7Y_KFHjQtXcqui/view?usp=drivesdk" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1Wx1O10wLPgjy8miUIMcwBVKrq0HE3Lc_/view?usp=drivesdk" }
      ]

    },
    //Maven Market Project
    {
      title: 'Topline Performance Dashboard – Maven Market',
      objective: 'Track topline KPIs such as total transactions, profit, returns, and revenue trends.Enable performance monitoring by city, country, and product brand to support strategic decisions. Deliver an intuitive and visually impactful Power BI dashboard to drive executive insights.',
      summary: 'This project was built to analyze transactional and revenue data for Maven Market, focusing on key business metrics.The dashboard aggregates sales data from different cities and countries, highlighting top-performing brands and identifying high return rates.Excel was used for preprocessing, and Power BI was utilized to design the dashboard using relationships and calculated measures.The report includes structured Data Pane, Model View, and a single-tab dashboard named Topline Performance for ease of navigation and user focus',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQHiQJPTPZdFUA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1674270403634?e=2147483647&v=beta&t=wr22AvK_-G1voNv_-F19DatdLOelkKYK4-_DWRb0OIM',
      techStack: 'Microsoft Excel (Data Cleaning & Preprocessing) Power BI (Data Modeling, DAX, Dashboard Creation)',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Topline Performance',
          images: [
            'https://github.com/MLopita/Topline-Performance---Maven-Market-Report/blob/main/Topline%20Performance.png?raw=true',
          ],
          points: [
            'KPI Cards to display current month’s total transactions, profit, and return count along with comparison to goals.',

            'Matrix Table showing product brand-wise breakdown of total sales, transactions, profit margin, and return rate using conditional formatting for better insights.',

            'Bar Chart representing total revenue by city to compare location-wise performance.',

            'Pie Chart for total transactions by country, highlighting market distribution.',

            'Column Chart showing weekly revenue trends to observe performance over time.',

            'Gauge Chart to monitor revenue achievement against the set target.'
          ]
        },
        {
          title: 'Data Pane / Model ',
          images: [
            'https://github.com/MLopita/portfolio/blob/master/Data%20&%20Model%20View-Maven%20market.png?raw=true'
          ],
          points: [

          ]
        }
      ],
      insights: [
        'Identified top revenue-generating cities like Salem and Tacoma.',
        'Flagged underperforming brands with high return rates and low profit margins.',
        'Achieved revenue tracking against target benchmarks ($120K) with real-time updates.',
        'Facilitated decision-making on product focus and country-level strategy optimization.'
      ],
      files: [
        { name: "PBIX File ", url: "https://drive.google.com/file/d/1boFrHkmHaRKuaWIC3T6XhX-2Lcorv5GN/view?usp=drivesdk" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1X2jCA42fAhniwJozQN5I7ob2J4LlqWd8/view?usp=drivesdk" }
      ]
    },
    //FNP Project
    {
      title: 'FNP Sales Dashboard',
      objective: 'To analyze sales performance for Ferns and Petals (FNP) using transactional and customer data to uncover trends in revenue, customer behavior, occasion-based sales, and product performance. The goal was to build a dynamic dashboard that helps optimize sales strategy and improve customer satisfaction.',
      summary: 'The project involved cleaning and transforming data from multiple sources including orders, products, and customer datasets. The analysis explored revenue trends, seasonal patterns, and the impact of different occasions on customer purchasing behavior.Relationships were built between datasets using Power Pivot, and DAX was used to generate KPIs and advanced metrics.The final output was a Pivot Chart of different visuals offering visual insights into sales, product, and customer dimensions.',
      image: 'https://etimg.etb2bimg.com/photo/91536669.cms',
      techStack: 'Power BI, Power Pivot, Power Query, DAX, Excel, Data Modeling, Data Visualization',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link',
      visuals: [
        {
          title: 'Sales Performance Overview',
          images: [

          ],
          points: [
            'Monthly Sales Trend (Line Chart), Total Revenue & Average Order Value (Cards), Top Products by Revenue (Bar Chart)'
          ]
        },
        {
          title: 'Customer & Geographic Insights',
          images: [

          ],
          points: [
            'City-wise Orders (Map/Chart), Occasion-wise Sales Comparison, Product Popularity by Occasion'
          ]
        },
        {
          title: 'Operational Analysis',
          images: [
            'https://github.com/MLopita/Sales-Analysis-Dashboard-for-FNP/blob/main/fnp%20ss.png?raw=true'
          ],
          points: [
            'Order Quantity vs Delivery Time (Scatter Plot)',
          ]
        }
      ],
      insights: [
        'Identified peak sales periods around festivals, helping FNP plan marketing and inventory more   effectively.',
        'Floral and personalized gifts were top-performing categories, guiding product focus.',
        'Metro cities drove the highest sales, suggesting potential for targeted local campaigns.',
        'B2B clients showed higher average order value, indicating growth opportunities in corporate     gifting',
        'Moderate discounts proved effective, improving conversion rates without hurting margins.',
        'Top-performing sales reps and underperforming regions were identified for better team management.',
        'These insights helped FNP make smarter decisions in marketing, sales strategy, and product planning—leading to improved customer targeting and business growth.',
      ],
      files: [
        { name: "Excel File ", url: "https://docs.google.com/spreadsheets/d/172HL1KjDXItI0Y6NXSCtNFtXbrawRNIJ/edit?usp=drivesdk&ouid=102164671172485530304&rtpof=true&sd=true" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://drive.google.com/file/d/1fuxw4upe3y-KPJlUuFJOzs08Txvxy-TG/view?usp=drivesdk" }
      ]
    },
    // add more projects
  ];

  selectedProject: any = null;

  viewDetails(project: any) {
    this.selectedProject = project;
  }

  backToList() {
    this.selectedProject = null;
  }
}
