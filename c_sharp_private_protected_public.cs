using System;

class Birds{
  /*
  public  int tail=1;
  protected int eyes=2;
  private int arms=0;
  */
}


class Program:Birds {
  /*
  public  int tail=1;
  protected int eyes=2;
  private int arms=0;
  */
  public static void Main (string[] args) {

    //Birds raven=new Birds();
    //Console.WriteLine("tail "+sparrow.tail);
    //Console.WriteLine("eyes "+sparrow.eyes);
    //Console.WriteLine("arms "+sparrow.arms);
    //с протектед попробуй

    Program sparrow=new Program();
    //Console.WriteLine("tail "+sparrow.tail);
    //Console.WriteLine("eyes "+sparrow.eyes);
    //Console.WriteLine("arms "+sparrow.arms);

    Fishes salmon=new Fishes();
    //Console.WriteLine("tail "+salmon.tail);
    //Console.WriteLine("eyes "+salmon.eyes);
    //Console.WriteLine("arms "+salmon.arms);
  }

}

class Fishes{
  
  public  int tail=1;
  protected int eyes=2;
  private int arms=0;
  
}