const questions = [
    {
        question: `Given the following,

    class X { void do1() { } }
    class Y extends X { void do2() { } }
    
    class Chrome {
        public static void main(String [] args) {
    		X x1 = new X();
    		X x2 = new Y();
    		Y y1 = new Y();
    		// insert code here
    } }

    Which, inserted at line 9, will compile?
        `,
        answer: ["x2.do2();", "(Y)x2.do2();", "((Y)x2).do2();", "None of the above statements will compile."],
        correctAnswerIndex: 2
    },
    {
        question: `Given:

    public class Tenor extends Singer {
    
        public static String sing() { return "fa"; }
    
        public static void main(String[] args) {
            Tenor t = new Tenor();
            Singer s = new Tenor();
            System.out.println(t.sing() + " " + s.sing());
        }
    }
    
    class Singer { public static String sing() { return "la"; } }
    
    What is the result?
    `,
        answer: ["fa fa", "fa la", "la la", "Compilation fails", "An exception is thrown at runtime"],
        correctAnswerIndex: 1
    },
    {
        question: `Given:

    class Building {
        Building() { System.out.print("b "); }
    
        Building(String name) {
            this();
            System.out.print("bn " + name);
        }
    }
    
    public class House extends Building {
        House() { System.out.print("h "); }
        
        House(String name) {
            this();
            System.out.print("hn " + name);
        }
    
        public static void main(String[] args) { new House("x "); }
    }
    
    What is the result?
    `,
        answer: ["h hn x", "hn x h", "b h hn x", "bn x h hn x", "b bn x h hn x", "bn x b h hn x", "Compilation fails"],
        correctAnswerIndex: 2
    },
    {
        question: `Given:

    class Mammal {
        String name = "furry ";
        String makeNoise() { return "generic noise"; }
    }
    
    class Zebra extends Mammal {
        String name = "stripes ";
        String makeNoise() { return "bray"; }
    }
    
    public class ZooKeeper {
        public static void main(String[] args) { new ZooKeeper().go(); }
    
        void go() {
            Mammal m = new Zebra();
            System.out.println(m.name + m.makeNoise());
        }
    }
    `,
        answer: [
            "furry bray",
            "stripes bray",
            "furry generic noise",
            "stripes generic noise",
            "Compilation fails",
            "An exception is thrown at runtime"
        ],
        correctAnswerIndex: 0
    },
    {
        question: `Given:
    
    import java.util.*;
    
    class Business { }
    class Hotel extends Business { }
    class Inn extends Hotel { }
    
    public class Travel {
    	ArrayList<Hotel> go() {
    		// insert code here
    	}
    }

    Which, inserted independently at line 9, will compile?
    `,
        answer: [
            "return new ArrayList<Inn>();",
            "return new ArrayList<Hotel>();",
            "return new ArrayList<Object>();",
            "return new ArrayList<Business>();"
        ],
        correctAnswerIndex: 1
    },
    {
        question: `
        public void foo( boolean a, boolean b)
        { 
            if( a ) 
            {
                System.out.println("A"); /* Line 5 */
            } 
            else if(a && b) /* Line 7 */
            { 
                System.out.println( "A && B"); 
            } 
            else /* Line 11 */
            { 
                if ( !b ) 
                {
                    System.out.println( "notB") ;
                } 
                else 
                {
                    System.out.println( "ELSE" ) ; 
                } 
            } 
        }
    `,
        answer: [
            `If a is true and b is true then the output is "A && B"`,
            `If a is true and b is false then the output is "notB"`,
            `If a is false and b is true then the output is "ELSE" `,
            `If a is false and b is false then the output is "ELSE"`
        ],
        correctAnswerIndex: 2
    },
    {
        question: `
    public class MyOuter 
    {
        public static class MyInner 
        {
            public static void foo() { }
        }
    }
    
    Which statement, if placed in a class other than MyOuter or MyInner, instantiates an instance of the nested class?
    `,
        answer: [
            `MyOuter m = new MyOuter();
MyOuter.MyInner mi = m.new MyOuter.MyInner();`,
            `MyOuter.MyInner m = new MyOuter.MyInner();`,
            `MyOuter.MyInner mi = new MyInner();`,
            `MyInner mi = new MyOuter.MyInner();`
        ],
        correctAnswerIndex: 1
    },
    // { question: `Question 4`, answer: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 4`, answer: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 4`, answer: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 4`, answer: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 4`, answer: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    { question: "Primitive datatypes are allocated on stack.", answer: ["True", "False"], correctAnswerIndex: 0 },
    {
        question: "Can we create an instance of Enum outside of Enum itself?",
        answer: ["Yes", "No"],
        correctAnswerIndex: 1
    },
    {
        question: "What type of variable can be defined in an interface?",
        answer: ["public static", "private final", "public final", "static final"],
        correctAnswerIndex: 0
    }
];

export default questions;
