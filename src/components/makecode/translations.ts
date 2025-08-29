const translations = {
    en: {
        blockAdd: "Add blocks",
        blockEnabled: "Add blocks for your connected and simulated devices to the modules drawer",
        blockDisabled: "This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer",
        simAdd: "Add simulator",
        simEnabled: "Create a simulator for each Role without an assigned device",
        simDisabled: "This button becomes available if there are Roles without assignable devices",
    },
    de: {
        blockAdd: "Blöcke hinzufügen",
        blockEnabled: "Fügen Sie Blöcke für Ihre verbundenen und simulierten Geräte zur Modulauswahl hinzu",
        blockDisabled: "Diese Schaltfläche wird verfügbar, wenn Sie Geräte verbunden haben, für die noch keine passenden Blöcke zur 'Module'-Leiste hinzugefügt wurden",
        simAdd: "Simulator hinzufügen",
        simEnabled: "Erstellen Sie einen Simulator für jede Rolle ohne zugewiesenes Gerät",
        simDisabled: "Diese Schaltfläche wird verfügbar, wenn es Rollen ohne zuweisbare Geräte gibt",
    },
}

export function translateLang(key:string) {
    const lang = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en"
    return translations[lang]?.[key] || translations.en[key]
}