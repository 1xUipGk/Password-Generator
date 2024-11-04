const translations = {
    en: {
        title: "Password Generator",
        length: "Length",
        settings: "Settings",
        options: {
            lowercase: "Lowercase (a-z)",
            uppercase: "Uppercase (A-Z)",
            numbers: "Numbers (0-9)",
            symbols: "Symbols (!-$^+)",
            excludeDuplicate: "Exclude Duplicate",
            includeSpaces: "Include Spaces"
        },
        generateBtn: "Generate Password",
        settingsMenu: {
            title: "Settings",
            language: "Language",
            darkMode: "Dark Mode",
            autoGenerate: "Auto Generate",
            showStrengthBar: "Show Strength Bar",
            resetBtn: "Reset Settings",
            defaultLength: "Default Length",
            customSymbols: "Custom Symbols",
            history: "Password History",
            clearHistory: "Clear History"
        },
        strength: {
            weak: "Weak password",
            medium: "Medium password",
            strong: "Strong password"
        },
        copy: {
            tooltip: "Copy to clipboard",
            copied: "Copied!"
        },
        history: {
            title: "Password History",
            empty: "No passwords in history",
            clear: "Clear History",
            confirmClear: {
                title: "Clear History",
                message: "Are you sure you want to clear all password history?",
                cancel: "Cancel",
                confirm: "Clear"
            }
        },
        footer: {
            createdBy: "Created by",
            privacy: "Privacy",
            terms: "Terms of Service"
        },
        privacyPolicy: {
            title: "Privacy Policy",
            intro: "This Password Generator operates entirely in your browser. We do not collect, store, or transmit any of your passwords or personal information. All generated passwords and settings are stored locally on your device.",
            localStorage: {
                title: "Local Storage",
                content: "We use local storage to save your preferences and password history. This data never leaves your device and can be cleared at any time through your browser settings."
            },
            analytics: {
                title: "No Analytics",
                content: "We do not use any analytics or tracking tools. Your privacy is our priority."
            }
        },
        termsOfService: {
            title: "Terms of Service",
            intro: "By using this Password Generator, you agree to the following terms:",
            terms: [
                "The service is provided \"as is\" without any warranties.",
                "We are not responsible for any loss or damage resulting from using generated passwords.",
                "You are responsible for storing and managing your passwords securely.",
                "We recommend not using generated passwords for critical security applications without proper verification."
            ],
            security: {
                title: "Security",
                intro: "While we strive to generate secure passwords, we recommend:",
                recommendations: [
                    "Using different passwords for different accounts",
                    "Regularly changing your passwords",
                    "Using a reliable password manager",
                    "Enabling two-factor authentication when possible"
                ]
            }
        }
    },
    ar: {
        title: "مولد كلمات المرور",
        length: "الطول",
        settings: "الإعدادات",
        options: {
            lowercase: "أحرف صغيرة (a-z)",
            uppercase: "أحرف كبيرة (A-Z)",
            numbers: "أرقام (0-9)",
            symbols: "رموز (!-$^+)",
            excludeDuplicate: "استبعاد التكرار",
            includeSpaces: "تضمين المسافات"
        },
        generateBtn: "توليد كلمة المرور",
        settingsMenu: {
            title: "الإعدادات",
            language: "اللغة",
            darkMode: "الوضع المظلم",
            autoGenerate: "توليد تلقائي",
            showStrengthBar: "إظهار شريط القوة",
            resetBtn: "إعادة ضبط الإعدادات",
            defaultLength: "الطول الافتراضي",
            customSymbols: "رموز مخصصة",
            history: "سجل كلمات المرور",
            clearHistory: "مسح السجل"
        },
        strength: {
            weak: "كلمة مرور ضعيفة",
            medium: "كلمة مرور متوسطة",
            strong: "كلمة مرور قوية"
        },
        copy: {
            tooltip: "نسخ إلى الحافظة",
            copied: "تم النسخ!"
        },
        history: {
            title: "سجل كلمات المرور",
            empty: "لا توجد كلمات مرور في السجل",
            clear: "مسح السجل",
            confirmClear: {
                title: "مسح السجل",
                message: "هل أنت متأكد من مسح جميع كلمات المرور من السجل؟",
                cancel: "إلغاء",
                confirm: "مسح"
            }
        },
        footer: {
            createdBy: "تم التطوير بواسطة",
            privacy: "الخصوصية",
            terms: "شروط الاستخدام"
        },
        privacyPolicy: {
            title: "سياسة الخصوصية",
            intro: "يعمل مولد كلمات المرور هذا بالكامل في متصفحك. نحن لا نقوم بجمع أو تخزين أو نقل أي من كلمات المرور أو المعلومات الشخصية الخاصة بك. يتم تخزين جميع كلمات المرور المولدة والإعدادات محلياً على جهازك.",
            localStorage: {
                title: "التخزين المحلي",
                content: "نستخدم التخزين المحلي لحفظ تفضيلاتك وسجل كلمات المرور. هذه البيانات لا تغادر جهازك أبداً ويمكن مسحها في أي وقت من خلال إعدادات المتصفح."
            },
            analytics: {
                title: "لا تحليلات",
                content: "نحن لا نستخدم أي أدوات تحليل أو تتبع. خصوصيتك هي أولويتنا."
            }
        },
        termsOfService: {
            title: "شروط الاستخدام",
            intro: "باستخدام مولد كلمات المرور هذا، فإنك توافق على الشروط التالية:",
            terms: [
                "يتم تقديم الخدمة \"كما هي\" دون أي ضمانات.",
                "نحن غير مسؤولين عن أي خسارة أو ضرر ناتج عن استخدام كلمات المرور المولدة.",
                "أنت مسؤول عن تخزين وإدارة كلمات المرور الخاصة بك بشكل آمن.",
                "نوصي بعدم استخدام كلمات المرور المولدة للتطبيقات الأمنية الحساسة دون التحقق المناسب."
            ],
            security: {
                title: "الأمان",
                intro: "بينما نسعى لتوليد كلمات مرور آمنة، نوصي بما يلي:",
                recommendations: [
                    "استخدام كلمات مرور مختلفة للحسابات المختلفة",
                    "تغيير كلمات المرور بشكل دوري",
                    "استخدام مدير كلمات مرور موثوق",
                    "تفعيل المصادقة الثنائية عندما يكون ذلك متاحاً"
                ]
            }
        }
    },
    fr: {
        title: "Générateur de Mot de Passe",
        length: "Longueur",
        settings: "Paramètres",
        options: {
            lowercase: "Minuscules (a-z)",
            uppercase: "Majuscules (A-Z)",
            numbers: "Chiffres (0-9)",
            symbols: "Symboles (!-$^+)",
            excludeDuplicate: "Exclure les Doublons",
            includeSpaces: "Inclure les Espaces"
        },
        generateBtn: "Générer le Mot de Passe",
        settingsMenu: {
            title: "Paramètres",
            language: "Langue",
            darkMode: "Mode Sombre",
            autoGenerate: "Génération Automatique",
            showStrengthBar: "Afficher la Barre de Force",
            resetBtn: "Réinitialiser",
            defaultLength: "Longueur par Défaut",
            customSymbols: "Symboles Personnalisés",
            history: "Historique des Mot de Passe",
            clearHistory: "Vider l'Historique"
        },
        strength: {
            weak: "Mot de passe faible",
            medium: "Mot de passe moyen",
            strong: "Mot de passe fort"
        },
        copy: {
            tooltip: "Copier dans le Presse-papiers",
            copied: "Copié!"
        },
        history: {
            title: "Historique des Mot de Passe",
            empty: "Aucun mot de passe dans l'historique",
            clear: "Vider l'historique",
            confirmClear: {
                title: "Vider l'historique",
                message: "Êtes-vous sûr de vouloir vider tout l'historique des mots de passe?",
                cancel: "Annuler",
                confirm: "Vider"
            }
        },
        footer: {
            createdBy: "Créé par",
            privacy: "Confidentialité",
            terms: "Conditions d'utilisation"
        },
        privacyPolicy: {
            title: "Politique de Confidentialité",
            intro: "Ce générateur de mot de passe fonctionne entièrement dans votre navigateur. Nous ne collectons, ne stockons ni ne transmettons aucun de vos mots de passe ou informations personnelles. Tous les mots de passe générés et les paramètres sont stockés localement sur votre appareil.",
            localStorage: {
                title: "Stockage Local",
                content: "Nous utilisons le stockage local pour sauvegarder vos préférences et l'historique des mots de passe. Ces données ne quittent jamais votre appareil et peuvent être effacées à tout moment via les paramètres de votre navigateur."
            },
            analytics: {
                title: "Pas d'Analyse",
                content: "Nous n'utilisons aucun outil d'analyse ou de suivi. Votre confidentialité est notre priorité."
            }
        },
        termsOfService: {
            title: "Conditions d'Utilisation",
            intro: "En utilisant ce générateur de mot de passe, vous acceptez les conditions suivantes:",
            terms: [
                "Le service est fourni \"tel quel\" sans aucune garantie.",
                "Nous ne sommes pas responsables des pertes ou dommages résultant de l'utilisation des mots de passe générés.",
                "Vous êtes responsable du stockage et de la gestion sécurisée de vos mots de passe.",
                "Nous recommandons de ne pas utiliser les mots de passe générés pour des applications de sécurité critiques sans vérification appropriée."
            ],
            security: {
                title: "Sécurité",
                intro: "Bien que nous nous efforcions de générer des mots de passe sécurisés, nous recommandons:",
                recommendations: [
                    "D'utiliser différents mots de passe pour différents comptes",
                    "De changer régulièrement vos mots de passe",
                    "D'utiliser un gestionnaire de mots de passe fiable",
                    "D'activer l'authentification à deux facteurs lorsque c'est possible"
                ]
            }
        }
    },
    es: {
        title: "Generador de Contraseñas",
        length: "Longitud",
        settings: "Ajustes",
        options: {
            lowercase: "Minúsculas (a-z)",
            uppercase: "Mayúsculas (A-Z)",
            numbers: "Números (0-9)",
            symbols: "Símbolos (!-$^+)",
            excludeDuplicate: "Excluir Duplicados",
            includeSpaces: "Incluir Espacios"
        },
        generateBtn: "Generar Contraseña",
        settingsMenu: {
            title: "Ajustes",
            language: "Idioma",
            darkMode: "Modo Oscuro",
            autoGenerate: "Generación Automática",
            showStrengthBar: "Mostrar Barra de Fuerza",
            resetBtn: "Restablecer",
            defaultLength: "Longitud Predeterminada",
            customSymbols: "Símbolos Personalizados",
            history: "Historial de Contraseñas",
            clearHistory: "Limpiar Historial"
        },
        strength: {
            weak: "Contraseña débil",
            medium: "Contraseña media",
            strong: "Contraseña fuerte"
        },
        copy: {
            tooltip: "Copiar al portapapeles",
            copied: "Copiado!"
        },
        history: {
            title: "Historial de Contraseñas",
            empty: "No hay contraseñas en el historial",
            clear: "Limpiar Historial",
            confirmClear: {
                title: "Limpiar Historial",
                message: "¿Estás seguro de que quieres limpiar todo el historial de contraseñas?",
                cancel: "Cancelar",
                confirm: "Limpiar"
            }
        },
        footer: {
            createdBy: "Creado por",
            privacy: "Privacidad",
            terms: "Términos de servicio"
        },
        privacyPolicy: {
            title: "Política de Privacidad",
            intro: "Este generador de contraseñas funciona completamente en su navegador. No recopilamos, almacenamos ni transmitimos ninguna de sus contraseñas o información personal. Todas las contraseñas generadas y la configuración se almacenan localmente en su dispositivo.",
            localStorage: {
                title: "Almacenamiento Local",
                content: "Utilizamos el almacenamiento local para guardar sus preferencias y el historial de contraseñas. Estos datos nunca salen de su dispositivo y pueden borrarse en cualquier momento a través de la configuración de su navegador."
            },
            analytics: {
                title: "Sin Análisis",
                content: "No utilizamos ninguna herramienta de análisis o seguimiento. Su privacidad es nuestra prioridad."
            }
        },
        termsOfService: {
            title: "Términos de Servicio",
            intro: "Al usar este generador de contraseñas, acepta los siguientes términos:",
            terms: [
                "El servicio se proporciona \"tal cual\" sin garantías.",
                "No somos responsables de ninguna pérdida o daño resultante del uso de las contraseñas generadas.",
                "Usted es responsable de almacenar y gestionar sus contraseñas de forma segura.",
                "Recomendamos no usar las contraseñas generadas para aplicaciones de seguridad críticas sin la verificación adecuada."
            ],
            security: {
                title: "Seguridad",
                intro: "Si bien nos esforzamos por generar contraseñas seguras, recomendamos:",
                recommendations: [
                    "Usar diferentes contraseñas para diferentes cuentas",
                    "Cambiar las contraseñas regularmente",
                    "Usar un gestor de contraseñas confiable",
                    "Activar la autenticación de dos factores cuando sea posible"
                ]
            }
        }
    },
    de: {
        title: "Passwort-Generator",
        length: "Länge",
        settings: "Einstellungen",
        options: {
            lowercase: "Kleinbuchstaben (a-z)",
            uppercase: "Großbuchstaben (A-Z)",
            numbers: "Zahlen (0-9)",
            symbols: "Symbole (!-$^+)",
            excludeDuplicate: "Duplikate Ausschließen",
            includeSpaces: "Leerzeichen Einschließen"
        },
        generateBtn: "Passwort Generieren",
        settingsMenu: {
            title: "Einstellungen",
            language: "Sprache",
            darkMode: "Dunkelmodus",
            autoGenerate: "Automatische Generierung",
            showStrengthBar: "Stärkeleiste Anzeigen",
            resetBtn: "Zurücksetzen",
            defaultLength: "Standardlänge",
            customSymbols: "Benutzerdefinierte Symbole",
            history: "Passwort-Historie",
            clearHistory: "Historie Löschen"
        },
        strength: {
            weak: "Schwaches Passwort",
            medium: "Mittleres Passwort",
            strong: "Starkes Passwort"
        },
        copy: {
            tooltip: "In die Zwischenablage kopieren",
            copied: "Kopiert!"
        },
        history: {
            title: "Passwort-Historie",
            empty: "Keine Passwörter in der Historie",
            clear: "Historie Löschen",
            confirmClear: {
                title: "Historie Löschen",
                message: "Sind Sie sicher, dass Sie die gesamte Passwort-Historie löschen möchten?",
                cancel: "Abbrechen",
                confirm: "Löschen"
            }
        },
        footer: {
            createdBy: "Erstellt von",
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen"
        },
        privacyPolicy: {
            title: "Datenschutzerklärung",
            intro: "Dieser Passwort-Generator arbeitet vollständig in Ihrem Browser. Wir sammeln, speichern oder übertragen keine Ihrer Passwörter oder persönlichen Informationen. Alle generierten Passwörter und Einstellungen werden lokal auf Ihrem Gerät gespeichert.",
            localStorage: {
                title: "Lokaler Speicher",
                content: "Wir verwenden den lokalen Speicher, um Ihre Einstellungen und den Passwort-Verlauf zu speichern. Diese Daten verlassen niemals Ihr Gerät und können jederzeit über Ihre Browser-Einstellungen gelöscht werden."
            },
            analytics: {
                title: "Keine Analyse",
                content: "Wir verwenden keine Analyse- oder Tracking-Tools. Ihre Privatsphäre hat Priorität."
            }
        },
        termsOfService: {
            title: "Nutzungsbedingungen",
            intro: "Durch die Nutzung dieses Passwort-Generators stimmen Sie den folgenden Bedingungen zu:",
            terms: [
                "Der Service wird \"wie er ist\" ohne Garantien bereitgestellt.",
                "Wir sind nicht verantwortlich für Verluste oder Schäden, die aus der Verwendung generierter Passwörter resultieren.",
                "Sie sind für die sichere Speicherung und Verwaltung Ihrer Passwörter verantwortlich.",
                "Wir empfehlen, generierte Passwörter nicht ohne angemessene Überprüfung für kritische Sicherheitsanwendungen zu verwenden."
            ],
            security: {
                title: "Sicherheit",
                intro: "Während wir uns bemühen, sichere Passwörter zu generieren, empfehlen wir:",
                recommendations: [
                    "Verschiedene Passwörter für verschiedene Konten zu verwenden",
                    "Passwörter regelmäßig zu ändern",
                    "Einen zuverlässigen Passwort-Manager zu verwenden",
                    "Wenn möglich, Zwei-Faktor-Authentifizierung zu aktivieren"
                ]
            }
        }
    },
    tr: {
        title: "Şifre Oluşturucu",
        length: "Uzunluk",
        settings: "Ayarlar",
        options: {
            lowercase: "Küçük Harfler (a-z)",
            uppercase: "Büyük Harfler (A-Z)",
            numbers: "Sayılar (0-9)",
            symbols: "Semboller (!-$^+)",
            excludeDuplicate: "Tekrarları Hariç Tut",
            includeSpaces: "Boşlukları Dahil Et"
        },
        generateBtn: "Şifre Oluştur",
        settingsMenu: {
            title: "Ayarlar",
            language: "Dil",
            darkMode: "Karanlık Mod",
            autoGenerate: "Otomatik Oluştur",
            showStrengthBar: "Güç Çubuğunu Göster",
            resetBtn: "Sıfırla",
            defaultLength: "Varsayılan Uzunluk",
            customSymbols: "Özel Semboller",
            history: "Şifre Geçmişi",
            clearHistory: "Geçmişi Temizle"
        },
        strength: {
            weak: "Zayıf şifre",
            medium: "Orta şifre",
            strong: "Güçlü şifre"
        },
        copy: {
            tooltip: "Panoya Kopyala",
            copied: "Kopyalandı!"
        },
        history: {
            title: "Şifre Geçmişi",
            empty: "Geçmişte şifre yok",
            clear: "Geçmişi Temizle",
            confirmClear: {
                title: "Geçmişi Temizle",
                message: "Geçmişi tamamen temizlemek istediğinize emin misiniz?",
                cancel: "İptal",
                confirm: "Temizle"
            }
        },
        footer: {
            createdBy: "Geliştiren",
            privacy: "Gizlilik",
            terms: "Kullanım Koşulları"
        },
        privacyPolicy: {
            title: "Gizlilik Politikası",
            intro: "Bu Şifre Oluşturucu tamamen tarayıcınızda çalışır. Şifrelerinizi veya kişisel bilgilerinizi toplamaz, saklamaz veya iletmeyiz. Tüm oluşturulan şifreler ve ayarlar cihazınızda yerel olarak saklanır.",
            localStorage: {
                title: "Yerel Depolama",
                content: "Tercihlerinizi ve şifre geçmişinizi kaydetmek için yerel depolama kullanıyoruz. Bu veriler asla cihazınızdan çıkmaz ve tarayıcı ayarlarınız aracılığıyla istediğiniz zaman silinebilir."
            },
            analytics: {
                title: "Analiz Yok",
                content: "Hiçbir analiz veya takip aracı kullanmıyoruz. Gizliliğiniz önceliğimizdir."
            }
        },
        termsOfService: {
            title: "Kullanım Koşulları",
            intro: "Bu Şifre Oluşturucuyu kullanarak aşağıdaki şartları kabul etmiş olursunuz:",
            terms: [
                "Hizmet, herhangi bir garanti olmaksızın \"olduğu gibi\" sunulmaktadır.",
                "Oluşturulan şifrelerin kullanımından kaynaklanan herhangi bir kayıp veya hasardan sorumlu değiliz.",
                "Şifrelerinizi güvenli bir şekilde saklamak ve yönetmek sizin sorumluluğunuzdadır.",
                "Oluşturulan şifrelerin kritik güvenlik uygulamalarında uygun doğrulama olmadan kullanılmamasını öneririz."
            ],
            security: {
                title: "Güvenlik",
                intro: "Güvenli şifreler oluşturmaya çalışırken, şunları öneriyoruz:",
                recommendations: [
                    "Farklı hesaplar için farklı şifreler kullanın",
                    "Şifrelerinizi düzenli olarak değiştirin",
                    "Güvenilir bir şifre yöneticisi kullanın",
                    "Mümkün olduğunda iki faktörlü kimlik doğrulamayı etkinleştirin"
                ]
            }
        }
    }
};

function updateLanguage(lang) {
    // تحديث العنوان الرئيسي
    document.querySelector('.pg-title').textContent = translations[lang].title;

    // تحديث عنوان الطول
    document.querySelector('.pg-length__label').textContent = translations[lang].length + ':';

    // تحديث عنوان الإعدادات
    document.querySelector('.pg-options__title').textContent = translations[lang].settings + ':';

    // تحديث نصوص الخيارات
    const optionLabels = document.querySelectorAll('.pg-option__label');
    const optionKeys = ['lowercase', 'uppercase', 'numbers', 'symbols', 'excludeDuplicate', 'includeSpaces'];
    optionLabels.forEach((label, index) => {
        label.textContent = translations[lang].options[optionKeys[index]];
    });

    // تحديث زر التوليد
    document.querySelector('.pg-generate').textContent = translations[lang].generateBtn;

    // تحديث نصوص الإعدادات
    document.querySelector('.pg-settings-header h2').textContent = translations[lang].settingsMenu.title;
    
    // تحديث نصوص قائمة اللغات
    document.querySelector('.pg-languages-header span').textContent = translations[lang].settingsMenu.language;
    document.querySelector('.pg-language-label').textContent = translations[lang].settingsMenu.language;

    // تحديث نصوص المفاتيح في الإعدادات
    const settingsLabels = document.querySelectorAll('.pg-settings-item label');
    settingsLabels.forEach(label => {
        const key = label.getAttribute('data-key');
        if (key && translations[lang].settingsMenu[key]) {
            label.textContent = translations[lang].settingsMenu[key];
        }
    });

    // تحديث نصوص السجل
    document.querySelector('.pg-history-header span').textContent = translations[lang].history.title;
    document.querySelector('.pg-clear-history').textContent = translations[lang].history.clear;

    // تحديث نصوص نافذة التأكيد
    document.querySelector('.pg-confirm-content h3').textContent = translations[lang].history.confirmClear.title;
    document.querySelector('.pg-confirm-content p').textContent = translations[lang].history.confirmClear.message;
    document.querySelector('.pg-confirm-cancel').textContent = translations[lang].history.confirmClear.cancel;
    document.querySelector('.pg-confirm-delete').textContent = translations[lang].history.confirmClear.confirm;

    // تحديث tooltip النسخ
    const copyTooltip = document.querySelector('.pg-tooltip');
    if (copyTooltip) {
        copyTooltip.setAttribute('data-text-initial', translations[lang].copy.tooltip);
        copyTooltip.setAttribute('data-text-end', translations[lang].copy.copied);
    }

    // تحديث زر إعادة الضبط
    document.querySelector('.pg-reset-btn').textContent = translations[lang].settingsMenu.resetBtn;

    // تحديث نص قوة كلمة المرور
    const strengthText = document.querySelector('.pg-strength__text');
    if (strengthText.textContent) {
        const strength = strengthText.textContent.toLowerCase().includes('weak') ? 'weak' :
                        strengthText.textContent.toLowerCase().includes('medium') ? 'medium' : 'strong';
        strengthText.textContent = translations[lang].strength[strength];
    }

    // تحديث نصوص الـ footer
    document.querySelector('.pg-footer p').innerHTML = `
        ${translations[lang].footer.createdBy} 
        <a href="https://www.instagram.com/3lismaeel/" target="_blank" class="pg-footer-link">@3lismaeel</a>
    `;
    document.querySelector('.pg-footer-links a:first-child').textContent = translations[lang].footer.privacy;
    document.querySelector('.pg-footer-links a:last-child').textContent = translations[lang].footer.terms;

    // تحديث نصوص صفحة الخصوصية
    document.querySelector('.pg-privacy-header h2').textContent = translations[lang].privacyPolicy.title;
    const privacyBody = document.querySelector('.pg-privacy-body');
    privacyBody.innerHTML = `
        <section>
            <h3>${translations[lang].privacyPolicy.title}</h3>
            <p>${translations[lang].privacyPolicy.intro}</p>
            
            <h4>${translations[lang].privacyPolicy.localStorage.title}</h4>
            <p>${translations[lang].privacyPolicy.localStorage.content}</p>
            
            <h4>${translations[lang].privacyPolicy.analytics.title}</h4>
            <p>${translations[lang].privacyPolicy.analytics.content}</p>
        </section>
    `;

    // تحديث نصوص صفحة الشروط
    document.querySelector('.pg-terms-header h2').textContent = translations[lang].termsOfService.title;
    const termsBody = document.querySelector('.pg-terms-body');
    termsBody.innerHTML = `
        <section>
            <h3>${translations[lang].termsOfService.title}</h3>
            <p>${translations[lang].termsOfService.intro}</p>
            <ul>
                ${translations[lang].termsOfService.terms.map(term => `<li>${term}</li>`).join('')}
            </ul>
        </section>
        
        <section>
            <h3>${translations[lang].termsOfService.security.title}</h3>
            <p>${translations[lang].termsOfService.security.intro}</p>
            <ul>
                ${translations[lang].termsOfService.security.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </section>
    `;
}
