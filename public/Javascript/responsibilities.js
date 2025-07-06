fetch('./data/responsibilities.json')
  .then(response => response.json())
  .then(responsibilityData => {
    const container = document.getElementById('responsibilitiesContainer');
    responsibilityData.forEach(item => {
      const achievementHTML = `
      <div class="w-full grid grid-cols-12 bg-white bg-opacity-90 py-4 px-4 shadow-lg mt-5 lg:mt-3 wow animate__fadeInUp" data-wow-duration="1s">
        <p class="col-span-10 text-teal-800 font-semibold">${item.description}</p>
        <div class="col-span-2 flex justify-center items-center w-full">
          <p class="text-sm text-gray-700 ">${item.duration}</p>
        </div>
      </div>
      `;
      container.innerHTML += achievementHTML;
    });
  });
