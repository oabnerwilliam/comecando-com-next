export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-screen">
            {children}
        </div>
    );
};