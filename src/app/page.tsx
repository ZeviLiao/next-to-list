import TodoList from './components/todo-list';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>My To-Do List</h1>
        <TodoList />

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </>
  );
}
