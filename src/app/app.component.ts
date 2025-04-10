import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';


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
    const resumeUrl = "assets/pdf/Lopita_Mishra_Resume.pdf"; // Relative path
  
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
    {
      title: 'Sales Insights Dashboard – ATILQ',
      objective: 'To develop a real-time sales dashboard that enables ATILQ to monitor sales quantity, revenue, profit, and regional performance.',
      summary: 'Built an automated Power BI dashboard connected to a centralized SQL Server database. Created interactive visuals to analyze revenue, profit margins, and customer segmentation. Implemented slicers for year/month filtering and dynamic region selection. Designed ETL pipeline to automate data flow, reducing manual effort by 20%. Supported better decision-making by surfacing key KPIs and underperforming areas.',
      image: 'https://i.pinimg.com/736x/89/fd/8a/89fd8a433b5b78b1cb3d25d02a71fec5.jpg',
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
  ];

  selectedProject: any = null;

  viewDetails(project: any) {
    this.selectedProject = project;
  }

  backToList() {
    this.selectedProject = null;
  }
}
