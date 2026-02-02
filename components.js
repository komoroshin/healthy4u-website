// Shared Header Component
function renderHeader() {
    return `
        <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <nav class="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                <a href="index.html" class="flex items-center">
                    <img src="images/logo.png" alt="Healthy4U" class="h-10">
                </a>
                <ul class="flex gap-8 items-center">
                    <li><a href="index.html#platform" class="text-brand-dark hover:text-brand-orange transition-colors">Features</a></li>
                    <li><a href="ecosystem-new.html" class="text-brand-dark hover:text-brand-orange transition-colors">Ecosystem</a></li>
                    <li><a href="index.html#pricing" class="text-brand-dark hover:text-brand-orange transition-colors">Pricing</a></li>
                    <li><a href="casestudy.html" class="text-brand-dark hover:text-brand-orange transition-colors">Case Study</a></li>
                    <li><a href="about.html" class="text-brand-dark hover:text-brand-orange transition-colors">About</a></li>
                    <li>
                        <a href="https://medical-b2b.healthy4u.world/auth/login" class="px-6 py-2.5 bg-brand-orange text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                            Get Started
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
}

// Shared Footer Component
function renderFooter() {
    return `
        <footer class="bg-white py-16 border-t border-gray-100">
            <div class="max-w-6xl mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h4 class="font-semibold mb-4 text-brand-dark">Product</h4>
                        <ul class="space-y-3 text-brand-muted">
                            <li><a href="index.html#platform" class="hover:text-brand-orange transition-colors">Features</a></li>
                            <li><a href="index.html#pricing" class="hover:text-brand-orange transition-colors">Pricing</a></li>
                            <li><a href="ecosystem-new.html" class="hover:text-brand-orange transition-colors">Ecosystem</a></li>
                            <li><a href="index.html#case-study" class="hover:text-brand-orange transition-colors">Case Studies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4 text-brand-dark">Company</h4>
                        <ul class="space-y-3 text-brand-muted">
                            <li><a href="about.html" class="hover:text-brand-orange transition-colors">About</a></li>
                            <li><a href="about.html#join-us" class="hover:text-brand-orange transition-colors">Careers</a></li>
                            <li><a href="#" class="hover:text-brand-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4 text-brand-dark">Resources</h4>
                        <ul class="space-y-3 text-brand-muted">
                            <li><a href="#" class="hover:text-brand-orange transition-colors">Documentation</a></li>
                            <li><a href="#" class="hover:text-brand-orange transition-colors">API</a></li>
                            <li><a href="#" class="hover:text-brand-orange transition-colors">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4 text-brand-dark">Legal</h4>
                        <ul class="space-y-3 text-brand-muted">
                            <li><a href="privacy.html" class="hover:text-brand-orange transition-colors">Privacy</a></li>
                            <li><a href="terms.html" class="hover:text-brand-orange transition-colors">Terms</a></li>
                            <li><a href="#" class="hover:text-brand-orange transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-gray-100 text-center text-sm text-brand-muted">
                    <p>&copy; 2026 Healthy4U. All rights reserved.</p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <p class="text-xs text-brand-muted leading-relaxed">
                        <span class="font-semibold">Medical Disclaimer:</span> Healthy4U provides health information for educational purposes only. AI assistants do not diagnose, treat, or replace professional medical care. Always consult a licensed healthcare provider for medical advice.
                    </p>
                </div>
            </div>
        </footer>
    `;
}

// Initialize components on page load
document.addEventListener('DOMContentLoaded', function() {
    // Insert header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
    }

    // Insert footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }
});
