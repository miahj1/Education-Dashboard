JSC.Chart('chartDiv', {
    type: 'horizontal column',
    title_label_text: 'Number of Subscribers Per Course Category',
    series: [
       {
          points: [
             {x: 'Business', y: 1868711},
             {x: 'Design', y: 1063148},
             {x: 'Music', y: 846689},
             {x: 'Web Development', y: 7981935}
          ]
       }
    ]
 });
 
 Chart.defaults.borderColor = '#36A2EB';
