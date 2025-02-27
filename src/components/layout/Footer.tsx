
const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} LazyFI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;