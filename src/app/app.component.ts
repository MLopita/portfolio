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
    const resumeUrl = "pdf/Lopita_Mishra_Resume.pdf"; // Relative path
  
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



  // projects = [
  //   {
  //     title: 'Sales Insights Dashboard  ATILQ',
  //     objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
  //     summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database.Created interactive visuals to analyze revenue, profit margins, and customer segmentation.Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
  //     image: 'https://i.pinimg.com/736x/89/fd/8a/89fd8a433b5b78b1cb3d25d02a71fec5.jpg',
  //     techStack: 'SQL Server, Power BI, ETL, Data Visualization, Automation',
  //     link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link'
  //   }
  // ];

  // goToProjectDetails(title: string) {
  //   this.router.navigate(['/project-detail', title]);
  // }


  projects = [
    //Project 1
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
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Data.png?raw=true',
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Model%20View.png?raw=true'
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
        { name: "PBIX File ", url: "https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/sales_insight.pbix" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
      ]

    },
    //Project 2
    {
      title: 'Adventure Works Cycle Sales Dashboard',
      objective: 'To design an interactive Power BI dashboard for Adventure Works Cycle that provides in-depth sales analytics and customer insights, enabling stakeholders to make data-driven decisions and identify key business opportunities.',
      summary: 'This project focused on transforming Adventure Works’ raw sales and customer data into a visually compelling and insightful dashboard. The data included customer demographics, product categories, order details, and regional sales.Using Power Query, the data was cleaned and reshaped, followed by creating a robust data model in Power BI. DAX was used to calculate key performance metrics and enable interactive features like dynamic filtering, slicers, and tooltips. The final dashboard offered stakeholders a high-level overview as well as drill-down capabilities into customer, regional, and product-level performance',
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
        { name: "PBIX File ", url: "https://github.com/MLopita/Adventure-works-Cycle-/blob/main/AdventureWorks%20Report.pbix" },
      ],
      videos: [
        { name: "Dashboard Walkthrough Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
      ]
    },
    //Project 3
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
      summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database. Created interactive visuals to analyze revenue, profit margins, and customer segmentation. Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
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
          title: 'Data Pane / Model ',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Data.png?raw=true',
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Model%20View.png?raw=true'
          ],
          points: [
            'Show schema design, relationships, and calculated fields',
            'Optional: show key DAX measures used for KPIs'
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ]
    },
    //Project 4
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
      summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database. Created interactive visuals to analyze revenue, profit margins, and customer segmentation. Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
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
          title: 'Data Pane / Model ',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Data.png?raw=true',
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Model%20View.png?raw=true'
          ],
          points: [
            'Show schema design, relationships, and calculated fields',
            'Optional: show key DAX measures used for KPIs'
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ]
    },
    //Project 5
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
      summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database. Created interactive visuals to analyze revenue, profit margins, and customer segmentation. Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
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
          title: 'Data Pane / Model ',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Data.png?raw=true',
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Model%20View.png?raw=true'
          ],
          points: [
            'Show schema design, relationships, and calculated fields',
            'Optional: show key DAX measures used for KPIs'
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ]
    },
    //Project 6
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
      summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database. Created interactive visuals to analyze revenue, profit margins, and customer segmentation. Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
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
          title: 'Data Pane / Model ',
          images: [
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Data.png?raw=true',
            'https://github.com/MLopita/Sales-Insights-Dashboard-for-ATILQ/blob/main/Model%20View.png?raw=true'
          ],
          points: [
            'Show schema design, relationships, and calculated fields',
            'Optional: show key DAX measures used for KPIs'
          ]
        }
      ],
      insights: [
        'Excel and Electricalsara drove the highest profits.',
        'Lucknow identified as an underperforming region (-2.7%).',
        'Helped reduce sales spend by 10% through better regional strategy.',
        'Enabled the team to dynamically filter and explore performance by city/product.'
      ]
    }
    // add more projects
  ];

  selectedProject: any = null;

  viewDetails(project: any) {
    this.selectedProject = project;
  }

  backToList() {
    this.selectedProject = null;
  }
  // scrollCarousel(direction: 'left' | 'right') {
  //   const element = this.carousel.nativeElement;
  //   const cardWidth = element.querySelector('.project-card')?.offsetWidth || 300;
  //   const gap = 20; // match gap in SCSS
  //   const scrollAmount = (cardWidth + gap) * 3;
  
  //   element.scrollBy({
  //     left: direction === 'left' ? -scrollAmount : scrollAmount,
  //     behavior: 'smooth',
  //   });
  // }
}
