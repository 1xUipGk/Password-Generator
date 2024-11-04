window.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const mainOptions = ['lowercase', 'uppercase', 'numbers', 'symbols', 'excludeDuplicate', 'includeSpaces'];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.id !== 'includeSpaces' && checkbox.id !== 'excludeDuplicate') {
            checkbox.checked = true;
        }
        
        checkbox.addEventListener('change', () => {
            const maxLength = calculateMaxLength();
            updateMaxLengthDisplay(maxLength);
            
            if (mainOptions.includes(checkbox.id) && document.getElementById('autoGenerateSwitch').classList.contains('active')) {
                generatePassword();
            }
            
            if (['lowercase', 'uppercase', 'numbers', 'symbols'].includes(checkbox.id)) {
                handleMainOptionsChange();
            }
            
            animateRangeUpdate();
        });
    });

    function handleMainOptionsChange() {
        const mainOptions = ['lowercase', 'uppercase', 'numbers', 'symbols'];
        const checkedCount = mainOptions.filter(id => 
            document.getElementById(id).checked
        ).length;

        if (checkedCount === 1) {
            mainOptions.forEach(id => {
                const checkbox = document.getElementById(id);
                checkbox.disabled = checkbox.checked;
            });
        } else {
            mainOptions.forEach(id => {
                document.getElementById(id).disabled = false;
            });
        }
    }

    function animateRangeUpdate() {
        const maxLength = calculateMaxLength();
        const lengthRange = document.getElementById('length');
        const lengthNumber = document.getElementById('lengthNumber');
        const currentValue = parseInt(lengthRange.value);
        
        lengthRange.max = maxLength;
        lengthNumber.max = maxLength;

        if (currentValue > maxLength) {
            const startValue = currentValue;
            const endValue = maxLength;
            const duration = 300;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentVal = Math.round(startValue + (endValue - startValue) * easeOutCubic(progress));
                
                lengthRange.value = currentVal;
                lengthNumber.value = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else if (document.getElementById('autoGenerateSwitch').classList.contains('active')) {
                    generatePassword();
                }
            }

            requestAnimationFrame(animate);
        }
    }

    const lengthRange = document.getElementById('length');
    const lengthNumber = document.getElementById('lengthNumber');

    lengthNumber.value = lengthRange.value;

    lengthRange.oninput = function() {
        lengthNumber.value = this.value;
        if (document.getElementById('autoGenerate').checked) {
            generatePassword();
        }
    }

    lengthNumber.oninput = function() {
        let value = parseInt(this.value) || 3;
        const maxLength = calculateMaxLength();
        
        if (value < 3) value = 3;
        if (value > maxLength) value = maxLength;
        
        this.value = value;
        lengthRange.value = value;
        if (document.getElementById('autoGenerate').checked) {
            generatePassword();
        }
    }

    handleMainOptionsChange();
    animateRangeUpdate();
    generatePassword();
});

function calculateMaxLength() {
    let maxLength = 0;
    const excludeDuplicate = document.getElementById('excludeDuplicate').checked;

    // حساب مجموع الأحرف المتاحة
    let availableChars = 0;
    if (document.getElementById('lowercase').checked) availableChars += 26;
    if (document.getElementById('uppercase').checked) availableChars += 26;
    if (document.getElementById('numbers').checked) availableChars += 10;
    if (document.getElementById('symbols').checked) {
        const customSymbols = document.getElementById('customSymbols').value;
        availableChars += customSymbols ? new Set(customSymbols).size : 5;
    }
    if (document.getElementById('includeSpaces').checked) availableChars += 1;

    if (excludeDuplicate) {
        // إذا كان منع التكرار مفعلاً، الحد الأقصى هو عدد الأحرف المتاحة
        maxLength = availableChars;
    } else {
        // إذا كان التكرار مسموحاً، نزيد الحد الأقصى بناءً على عدد الخيارات المحددة
        let selectedOptions = 0;
        if (document.getElementById('lowercase').checked) selectedOptions++;
        if (document.getElementById('uppercase').checked) selectedOptions++;
        if (document.getElementById('numbers').checked) selectedOptions++;
        if (document.getElementById('symbols').checked) selectedOptions++;
        if (document.getElementById('includeSpaces').checked) selectedOptions++;

        // زيادة الحد الأقصى بناءً على عدد الخيارات المحددة
        maxLength = Math.min(128, 20 * selectedOptions);
    }

    return Math.max(maxLength, 3);
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function generatePassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const customSymbols = document.getElementById('customSymbols').value;
    const symbolChars = customSymbols || '!-$^+';
    
    let allChars = '';
    let password = '';
    const excludeDuplicate = document.getElementById('excludeDuplicate').checked;

    if (document.getElementById('lowercase').checked) allChars += lowercaseChars;
    if (document.getElementById('uppercase').checked) allChars += uppercaseChars;
    if (document.getElementById('numbers').checked) allChars += numberChars;
    if (document.getElementById('symbols').checked) allChars += symbolChars;
    if (document.getElementById('includeSpaces').checked) allChars += ' ';

    const passwordLength = parseInt(document.getElementById('length').value);

    if (excludeDuplicate) {
        const charArray = allChars.split('');
        for (let i = 0; i < passwordLength && charArray.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * charArray.length);
            password += charArray[randomIndex];
            charArray.splice(randomIndex, 1);
        }
    } else {
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars.charAt(randomIndex);
        }
    }

    document.getElementById('password').value = password;
    updatePasswordStrength(password);
}

async function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    await navigator.clipboard.writeText(passwordInput.value);
    addToHistory(passwordInput.value);

    const copyButton = document.querySelector('.pg-password__copy');
    const mainIcon = copyButton.querySelector('svg:not(.pg-password__copy-check svg)');
    const checkIcon = copyButton.querySelector('.pg-password__copy-check');

    mainIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    
    setTimeout(() => {
        mainIcon.style.display = 'block';
        checkIcon.style.display = 'none';
    }, 1500);
}

// تحديث دالة تهيئة الوضع
function initTheme() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    
    if (settings.theme) {
        document.documentElement.setAttribute('data-theme', settings.theme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        
        // حفظ الإعداد الأولي
        settings.theme = theme;
        localStorage.setItem('settings', JSON.stringify(settings));
    }
}

// دوال التبديل الجديدة
function toggleTheme() {
    const switchElement = document.getElementById('darkModeSwitch');
    const isActive = !switchElement.classList.contains('active');
    switchElement.classList.toggle('active');
    
    document.documentElement.setAttribute('data-theme', isActive ? 'dark' : 'light');
    
    // حفظ الإعداد
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.theme = isActive ? 'dark' : 'light';
    localStorage.setItem('settings', JSON.stringify(settings));
}

function toggleAutoGenerate() {
    const switchElement = document.getElementById('autoGenerateSwitch');
    const isActive = !switchElement.classList.contains('active');
    switchElement.classList.toggle('active');
    
    // حفظ الإعداد
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.autoGenerate = isActive;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // تفعيل أو تعطيل التوليد التلقائي
    if (isActive) {
        enableAutoGenerate();
        generatePassword();
    } else {
        disableAutoGenerate();
    }
}

function toggleStrengthBar() {
    const switchElement = document.getElementById('strengthBarSwitch');
    const isActive = !switchElement.classList.contains('active');
    switchElement.classList.toggle('active');
    
    const strengthBar = document.querySelector('.pg-strength');
    strengthBar.style.display = isActive ? 'block' : 'none';
    
    // حفظ الإعداد
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.showStrengthBar = isActive;
    localStorage.setItem('settings', JSON.stringify(settings));
}

// تحديث دالة loadSettings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    
    // تحميل اللغة
    const savedLanguage = settings.language || 'en';
    changeLanguage(savedLanguage);

    // تحميل حالة الـ switches وتفعيل وظائفها
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const autoGenerateSwitch = document.getElementById('autoGenerateSwitch');
    const strengthBarSwitch = document.getElementById('strengthBarSwitch');

    // تحميل حالة الوضع المظلم
    if (settings.theme === 'dark') {
        darkModeSwitch?.classList.add('active');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        darkModeSwitch?.classList.remove('active');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // تحميل حالة التوليد التلقائي
    if (settings.autoGenerate !== false) {
        autoGenerateSwitch?.classList.add('active');
        // تفعيل مستمعات الأحداث للتوليد التلقائي
        enableAutoGenerate();
    } else {
        autoGenerateSwitch?.classList.remove('active');
        // تعطيل مستمعات الأحداث للتوليد التلقائي
        disableAutoGenerate();
    }
    
    // تحميل حالة شريط القوة
    if (settings.showStrengthBar !== false) {
        strengthBarSwitch?.classList.add('active');
        document.querySelector('.pg-strength').style.display = 'block';
    } else {
        strengthBarSwitch?.classList.remove('active');
        document.querySelector('.pg-strength').style.display = 'none';
    }

    // تحميل باقي الإعدادات
    if (settings.defaultLength) {
        document.getElementById('defaultLength').value = settings.defaultLength;
        document.getElementById('length').value = settings.defaultLength;
        document.getElementById('lengthNumber').value = settings.defaultLength;
    }

    if (settings.customSymbols) {
        document.getElementById('customSymbols').value = settings.customSymbols;
    }

    // تطبيق الثيم
    document.documentElement.setAttribute('data-theme', settings.theme || 'light');
}

// تحديث دالة تقييم قوة كلمة السر
function updatePasswordStrength(password) {
    const strengthContainer = document.querySelector('.pg-strength');
    const strengthBar = document.querySelector('.pg-strength__bar');
    const strengthText = document.querySelector('.pg-strength__text');
    
    // إزالة الأصناف السابقة
    strengthBar.classList.remove('weak', 'medium', 'strong');
    
    // حساب قوة كلمة السر
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    let strengthLevel = '';
    
    if (strength <= 2) {
        strengthLevel = 'weak';
        strengthBar.classList.add('weak');
    } else if (strength <= 4) {
        strengthLevel = 'medium';
        strengthBar.classList.add('medium');
    } else {
        strengthLevel = 'strong';
        strengthBar.classList.add('strong');
    }
    
    // استخدام الترجمات لعرض النص
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const currentLang = settings.language || 'en';
    strengthText.textContent = translations[currentLang].strength[strengthLevel];
}

// إضافة مستمع الأحداث للضغط على الشريط
document.querySelector('.pg-strength').addEventListener('click', function() {
    this.classList.toggle('active');
});

// تحديث HTML للشريط
document.querySelector('.pg-strength__bar').innerHTML = `
    <div class="pg-strength__section"></div>
    <div class="pg-strength__section"></div>
    <div class="pg-strength__section"></div>
`;

// دوال الإعدادات
function toggleSettings() {
    const sidebar = document.getElementById('settingsSidebar');
    sidebar.classList.toggle('active');
}

// تحديث دالة تغيير اللغة
function changeLanguage(lang) {
    const languages = {
        'en': { name: 'English', flag: 'gb' },
        'ar': { name: 'العربية', flag: 'sa' },
        'fr': { name: 'Français', flag: 'fr' },
        'es': { name: 'Español', flag: 'es' },
        'de': { name: 'Deutsch', flag: 'de' },
        'tr': { name: 'Türkçe', flag: 'tr' }
    };

    // تحديث العرض
    document.querySelector('.pg-current-language').textContent = languages[lang].name;
    document.getElementById('currentFlag').src = `https://flagcdn.com/w20/${languages[lang].flag}.png`;
    
    // تحديث علامة التحديد
    document.querySelectorAll('.pg-language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('onclick').includes(lang)) {
            option.classList.add('active');
        }
    });

    // تحديث اتجاه الصفحة
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // تحديث النصوص
    updateLanguage(lang);

    // حفظ اللغة في localStorage
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.language = lang;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // إخفاء قائمة اللغات
    hideLanguages();
}

// تحديث دالة إعادة الضبط
function resetSettings() {
    // إعادة ضبط التوليد التلقائي وشريط القوة
    document.getElementById('autoGenerate').checked = true;
    document.getElementById('showStrengthBar').checked = true;
    
    // إعادة ضبط الطول الافتراضي إلى 12
    document.getElementById('defaultLength').value = 12;
    document.getElementById('length').value = 12;
    document.getElementById('lengthNumber').value = 12;

    // إعادة ضبط الرموز المخصصة (تفريغ الحقل)
    document.getElementById('customSymbols').value = '';
    
    // تطيق التغييرات
    if (document.getElementById('autoGenerate').checked) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', generatePassword);
        });
    }

    // حديث إظهار شريط القوة
    const strengthBar = document.querySelector('.pg-strength');
    strengthBar.style.display = 'block';
    
    // حفظ الإعدادات مع الحفاظ على الوضع المظلم واللغة
    const currentSettings = JSON.parse(localStorage.getItem('settings') || '{}');
    const newSettings = {
        ...currentSettings,
        autoGenerate: true,
        showStrengthBar: true,
        defaultLength: 12, // حفظ الطول الافتراضي الجديد
        customSymbols: '', // حفظ الرموز المخصصة الفارغة
        language: currentSettings.language,
        theme: currentSettings.theme
    };
    
    localStorage.setItem('settings', JSON.stringify(newSettings));

    // توليد كلمة مرور جديدة
    generatePassword();
}

// حفظ الإعدادات
function saveSettings() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.autoGenerate = document.getElementById('autoGenerate').checked;
    settings.showStrengthBar = document.getElementById('showStrengthBar').checked;
    settings.theme = document.documentElement.getAttribute('data-theme');
    settings.defaultLength = document.getElementById('defaultLength').value;
    settings.customSymbols = document.getElementById('customSymbols').value;
    localStorage.setItem('settings', JSON.stringify(settings));
}

// تحميل الإعدادات عند بدء التطبيق
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    initTheme();
});

// دوال تغيير اللغة
function showLanguages() {
    document.getElementById('languagesList').classList.add('active');
    document.querySelector('.pg-settings-content').classList.add('language-view');
}

function hideLanguages() {
    document.getElementById('languagesList').classList.remove('active');
    document.querySelector('.pg-settings-content').classList.remove('language-view');
}

// إضافة مستمع لحدث تغيير الطول الافتراضي
document.getElementById('defaultLength').addEventListener('input', function() {
    let value = parseInt(this.value) || 3;
    
    // التحقق من الحدود
    if (value < 3) value = 3;
    if (value > 128) value = 128;
    
    this.value = value;
    
    // تحديث الطول الحالي
    document.getElementById('length').value = value;
    document.getElementById('lengthNumber').value = value;
    
    // حفظ الإعداد
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.defaultLength = value;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // توليد كلمة مرور جديدة إذا كان التوليد التلقائي مفعل
    if (document.getElementById('autoGenerate').checked) {
        generatePassword();
    }
});

// إضافة مستمع لحدث تغيير الرموز المخصصة
document.getElementById('customSymbols').addEventListener('input', function() {
    // حفظ الرموز المخصصة
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.customSymbols = this.value;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // توليد كلمة مرور جديدة إذا كان التوليد التققائي مفعل
    if (document.getElementById('autoGenerate').checked) {
        generatePassword();
    }
});

// تحديث مستمعي الأحداث للإعدادات
document.getElementById('darkMode').addEventListener('change', function() {
    toggleTheme();
    saveSettings();
}); // لا يولد كلمة مرور

document.getElementById('showStrengthBar').addEventListener('change', function() {
    const strengthBar = document.querySelector('.pg-strength');
    strengthBar.style.display = this.checked ? 'block' : 'none';
    saveSettings();
}); // لا يلد كلمة مرور

document.getElementById('defaultLength').addEventListener('input', function() {
    let value = parseInt(this.value) || 3;
    if (value < 3) value = 3;
    if (value > 128) value = 128;
    this.value = value;
    
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.defaultLength = value;
    localStorage.setItem('settings', JSON.stringify(settings));
}); // لا يولد كلمة مرور

document.getElementById('customSymbols').addEventListener('input', function() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.customSymbols = this.value;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // توليد كلمة مرور فقط إذا كان خيار الرموز مفعلاً
    if (document.getElementById('symbols').checked && document.getElementById('autoGenerate').checked) {
        generatePassword();
    }
});

// إضافة الدوال الجديدة للتعامل مع السجل
function addToHistory(password) {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const history = settings.passwordHistory || [];
    
    // التحقق من وجود كلمة المرور في السجل
    const isDuplicate = history.some(item => item.password === password);
    
    // إذا كانت كلمة المرور موجودة بالفعل، نخرج من الدالة
    if (isDuplicate) {
        return;
    }
    
    // إضافة كلمة المرور الجديدة مع التاريخ
    history.unshift({
        password: password,
        date: new Date().toISOString()
    });
    
    // الاحتفاظ فقط بآخر 100 كلمة مرور
    if (history.length > 100) {
        history.pop();
    }
    
    settings.passwordHistory = history;
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // تحديث العرض إذا كانت القائمة مفتوحة
    if (document.getElementById('historyList').classList.contains('active')) {
        updateHistoryDisplay();
    }
}

function togglePasswordHistory() {
    const historyList = document.getElementById('historyList');
    historyList.classList.add('active');
    document.querySelector('.pg-settings-content').classList.add('history-view');
    updateHistoryDisplay();
}

function hidePasswordHistory() {
    document.getElementById('historyList').classList.remove('active');
    document.querySelector('.pg-settings-content').classList.remove('history-view');
}

function clearPasswordHistory() {
    document.getElementById('confirmDialog').classList.add('active');
}

function hideConfirmDialog() {
    document.getElementById('confirmDialog').classList.remove('active');
}

function confirmClearHistory() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    settings.passwordHistory = [];
    localStorage.setItem('settings', JSON.stringify(settings));
    updateHistoryDisplay();
    hideConfirmDialog();
}

function updateHistoryDisplay() {
    const historyContent = document.getElementById('historyContent');
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const history = settings.passwordHistory || [];
    
    historyContent.innerHTML = history.map(item => {
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        return `
            <div class="pg-history-item">
                <div>
                    <div class="pg-history-password">${item.password}</div>
                    <div class="pg-history-date">${formattedDate}</div>
                </div>
                <button class="pg-history-copy" onclick="copyHistoryPassword('${item.password}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/>
                    </svg>
                </button>
            </div>
        `;
    }).join('');
}

// تحديث دالة copyHistoryPassword
async function copyHistoryPassword(password) {
    try {
        await navigator.clipboard.writeText(password);
        // إضافة تأثير بصري للنسخ
        const buttons = document.querySelectorAll('.pg-history-copy');
        buttons.forEach(button => {
            if (button.getAttribute('onclick').includes(password)) {
                const originalHTML = button.innerHTML;
                button.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#3ea46d" d="M21.7 5.3a1 1 0 0 1 0 1.4l-12 12a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4L9 16.58l11.3-11.3a1 1 0 0 1 1.4 0Z"/>
                    </svg>
                `;
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 1500);
            }
        });
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// تحديث مستمع الأحداث للـ confirmDialog
document.addEventListener('DOMContentLoaded', () => {
    const confirmDialog = document.getElementById('confirmDialog');
    if (confirmDialog) {
        confirmDialog.addEventListener('click', function(e) {
            if (e.target === this) {
                hideConfirmDialog();
            }
        });
    }
    
    loadSettings();
    initTheme();
});

// دوال جديدة للتعامل مع التوليد التلقائي
function enableAutoGenerate() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const lengthInputs = document.querySelectorAll('#length, #lengthNumber');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', generatePassword);
    });
    
    lengthInputs.forEach(input => {
        input.addEventListener('input', generatePassword);
    });
}

function disableAutoGenerate() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const lengthInputs = document.querySelectorAll('#length, #lengthNumber');
    
    checkboxes.forEach(checkbox => {
        checkbox.removeEventListener('change', generatePassword);
    });
    
    lengthInputs.forEach(input => {
        input.removeEventListener('input', generatePassword);
    });
}

// دوال التحكم في نافذة الخصوصية والشروط
function showPrivacy() {
    document.getElementById('privacy').classList.add('active');
}

function hidePrivacy() {
    document.getElementById('privacy').classList.remove('active');
}

function showTerms() {
    document.getElementById('terms').classList.add('active');
}

function hideTerms() {
    document.getElementById('terms').classList.remove('active');
}

// إضافة مستمعات لإغلاق النوافذ عند النقر خارجها
document.getElementById('privacy').addEventListener('click', function(e) {
    if (e.target === this) {
        hidePrivacy();
    }
});

document.getElementById('terms').addEventListener('click', function(e) {
    if (e.target === this) {
        hideTerms();
    }
});

// إضافة مستمع لتغييرات الخيارات التي تؤثر على الحد الأقصى
window.addEventListener('DOMContentLoaded', (event) => {
    // الخيارات التي تؤثر على الحد الأقصى
    const affectingOptions = [
        'lowercase',
        'uppercase', 
        'numbers', 
        'symbols',
        'excludeDuplicate'
    ];
    
    // إضافة مستمعات للخيارات
    affectingOptions.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', () => {
                updateMaxLengthDisplay(calculateMaxLength());
                animateRangeUpdate();
            });
        }
    });

    // مستمع لتغييرات الرموز المخصصة
    const customSymbolsInput = document.getElementById('customSymbols');
    if (customSymbolsInput) {
        customSymbolsInput.addEventListener('input', () => {
            if (document.getElementById('symbols').checked) {
                updateMaxLengthDisplay(calculateMaxLength());
                animateRangeUpdate();
            }
        });
    }
});

// تحديث دالة updateMaxLengthDisplay
function updateMaxLengthDisplay(maxLength) {
    const lengthRange = document.getElementById('length');
    const lengthNumber = document.getElementById('lengthNumber');
    
    // تحديث الحد الأقصى للعناصر
    lengthRange.max = maxLength;
    lengthNumber.max = maxLength;

    // تحديث القيمة الحالية إذا كانت أكبر من الحد الأقصى الجديد
    if (parseInt(lengthRange.value) > maxLength) {
        lengthRange.value = maxLength;
        lengthNumber.value = maxLength;
        if (document.getElementById('autoGenerateSwitch').classList.contains('active')) {
            generatePassword();
        }
    }

    // حساب وعرض معلومات الأحرف المتاحة
    const availableChars = calculateAvailableCharacters();
    const totalChars = availableChars.reduce((sum, type) => {
        switch(type) {
            case 'a-z': return sum + 26;
            case 'A-Z': return sum + 26;
            case '0-9': return sum + 10;
            case 'space': return sum + 1;
            default: return sum + (type.startsWith('symbols:') ? 
                new Set(type.replace('symbols:', '')).size : 5);
        }
    }, 0);

    // عرض معلومات التحديث في وحدة التحكم
    console.log({
        maxLength,
        totalAvailableCharacters: totalChars,
        currentLength: lengthRange.value,
        availableCharacterTypes: availableChars,
        excludeDuplicate: document.getElementById('excludeDuplicate').checked
    });
}

// دالة محسنة لحساب الأحرف المتاحة
function calculateAvailableCharacters() {
    let chars = [];
    if (document.getElementById('lowercase').checked) chars.push('a-z');
    if (document.getElementById('uppercase').checked) chars.push('A-Z');
    if (document.getElementById('numbers').checked) chars.push('0-9');
    if (document.getElementById('symbols').checked) {
        const customSymbols = document.getElementById('customSymbols').value;
        chars.push(`symbols:${customSymbols || '!-$^+'}`);
    }
    if (document.getElementById('includeSpaces').checked) chars.push('space');
    return chars;
}

// تسجيل Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
