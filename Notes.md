## Chart

https://codepen.io/tomfarrell/pen/JpxGNm

## Example css

https://codepen.io/team/css-tricks/pen/zxMPNp

## Statistics url

https://api.jikan.moe/v4/anime/21/statistics

### All Anime Search

https://api.jikan.moe/v4/anime?q=naruto&order_by=score&&sort=desc

### Specific Anime

https://api.jikan.moe/v4/anime/1735

### Specific Character

https://api.jikan.moe/v4/anime/1735/characters

### Specific Episodes

https://api.jikan.moe/v4/anime/1735/episodes

https://stackoverflow.com/questions/69150569/add-labels-to-bar-chart-chartjs

```

Chart.defaults.global.defaultFontFamily = "Lato";

var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
   type: 'horizontalBar',
   data: {
      labels: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
      datasets: [{
         data: [424493, 218321, 178018, 104733, 42758, 22844, 9754, 4511, 3223, 8859],
         backgroundColor: ["#73BFB8", "#73BFB8", "#73BFB8", "#73BFB8", "#73BFB8", "#73BFB8", "#73BFB8"],
      }]
   },
   options: {
      tooltips: {
        enabled: false
      },
      responsive: true,
      legend: {
         display: false,
         position: 'bottom',
         fullWidth: true,
         labels: {
           boxWidth: 10,
           padding: 50
         }
      },
      scales: {
         yAxes: [{
           barPercentage: 0.75,
           gridLines: {
             display: true,
             drawTicks: true,
             drawOnChartArea: false
           },
           ticks: {
             mirror: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11
           }

         }],
         xAxes: [{
             gridLines: {
               display: false,
               drawTicks: false,
               tickMarkLength: 5,
               drawBorder: false
             },
           ticks: {
             padding: 5,
             beginAtZero: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11,
             callback: function(label, index, labels) {
              return label/100000;
             }

           },
            scaleLabel: {
              display: true,
              padding: 10,
              fontFamily: 'Lato',
              fontColor: '#555759',
              fontSize: 16,
              fontStyle: 700,
              labelString: 'Scale Label'
            },

         }]
      }
   }
});
```

```
# Actual array
arr1 = [426051,218977,178457,105034,42883,22886,9786,4523,3230,8901]

# Weighted array
arr = [[426051,10],[218977,9],[178457,8],[105034,7],[42883,6],[22886,5],[9786,4],[4523,3],[3230,2],[8901,1]]

arrSum = 0
rsum = 0
for i in range(len(arr)):
    arrSum += arr[i][0]
    rsum += (arr[i][0] * arr[i][1])
    # print(arr[i][0] * arr[i][1])

print(rsum/arrSum)

```

```

          {/* cover outside */}
          <div className="anime-cover center">
            <div className="anime-title ">{<h1>{data.title}</h1>}</div>
            {/* Image info */}
            <div className="anime-img-info center">
              <img
                className="anime-cover-img "
                src={data.images.jpg.large_image_url}
                alt="cover-img"
              />
            </div>
            {/* info card */}
            <div className="anime-info card center">
              <p>woooorrrdssss</p>
              {animeStats.data && <p>{animeStats.data.completed}</p>}
            </div>
          </div>

```
