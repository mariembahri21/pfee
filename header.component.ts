import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { chart } from 'highcharts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  objects: any;
  nombreHeures: number = 0;
  donne: any;
  dateAbsence = '';
  collaborateurs = '';
  entity = '';
  date = '';
  compte = '';
  manager = '';
  results: any;
  inform: any[] = [];
  public Heures: number[] = [];
  public ch;
  
  constructor(private http: HttpClient) {
    Chart.register(...registerables);
  }
  
  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
    const url = 'http://localhost:8000/data/';
    this.http.get<any>(url).subscribe(data => {
      this.objects = data;
      this.generateChart();
    });
  }
  
  generateChart(): void {
   
    const motifs: string[] = this.objects.map((d: any) => d.motifs);
    const nombres: number[] = this.objects.map((d: any) => {
      if (d.absence) {
        return d.absence * 8;
      } else {
        return d.retard / 60;
      }
      
    });
  
    const motifsTotaux: { [motif: string]: number } = {};
    let totalHeures = 0;
  
    // Calculer le total des heures
    for (let i = 0; i < motifs.length; i++) {
      const motif = motifs[i];
      const heures = nombres[i];
  
      if (motif in motifsTotaux) {
        motifsTotaux[motif] += heures;
      } else {
        motifsTotaux[motif] = heures;
      }
  
      totalHeures += heures;
    }
  
    const labels = [];
    const data = [];
  
    // Créer les étiquettes avec les pourcentages
    for (const motif in motifsTotaux) {
      const pourcentage = (motifsTotaux[motif] / totalHeures).toLocaleString(undefined, { style: 'percent' });
      labels.push(`${motif} (${pourcentage})`);
      data.push(motifsTotaux[motif]);
    }
    
  
    // Configuration du graphique à anneau
    this.ch.destroy();
    this.ch = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nombre d\'heures',
          data: data,
          backgroundColor: [
            '#F0F8FF',
            '#6495ED',
            '#A9A9A9',
            '#2F4F4F',
            '#ADD8E6',
            '#B0C4DE',
            '#191970',
            '#4169E1'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false
      }
    });

  }
  
  applyFilters(): void {
    let url = 'http://localhost:8000/data/?';
    if (this.collaborateurs) {
      url += `&collaborateurs=${this.collaborateurs}`;
    }
    this.http.get<any>(url).subscribe((response: any) => {
      this.objects = response;
      this.generateChart();
      
    });
  }
  
}