    const filling = document.getElementById('filling');
    const cover = document.getElementById('cover');
    const scent = document.getElementById('scent');
    const type = document.getElementById('type');
    const name = document.getElementById('name');

    const preview = document.getElementById('pillowPreview');
    const summaryFilling = document.getElementById('summaryFilling');
    const summaryCover = document.getElementById('summaryCover');
    const summaryScent = document.getElementById('summaryScent');
    const summaryType = document.getElementById('summaryType');
    const summaryName = document.getElementById('summaryName');

    function updatePreview() {
      const coverColor = cover.value;
      preview.style.backgroundColor = coverColor;

      const fillingText = filling.options[filling.selectedIndex].text;
      const coverText = cover.options[cover.selectedIndex].text;
      const scentText = scent.options[scent.selectedIndex].text;
      const typeText = type.options[type.selectedIndex].text;

      summaryFilling.textContent = fillingText;
      summaryCover.textContent = coverText;
      summaryScent.textContent = scentText;
      summaryType.textContent = typeText;
      summaryName.textContent = name.value || '–';
    }

    filling.addEventListener('change', updatePreview);
    cover.addEventListener('change', updatePreview);
    scent.addEventListener('change', updatePreview);
    type.addEventListener('change', updatePreview);
    name.addEventListener('input', updatePreview);