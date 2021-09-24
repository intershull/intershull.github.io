using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sortirovka
{
	class Program
	{
		static void Main(string[] args)
		{
			int[] nums = new int[8] { 8,3,1,6,4,7,2,5 };

			for (int i = 0; i < nums.Length; i++)
			{ Console.WriteLine(nums[i]); };

			Console.WriteLine("-------");


			for (int i = 0; i < nums.Length; i++)
			{
				for (int j = 0; j < nums.Length - 1; j++)
				{
					if (nums[j] > nums[j + 1])
					{
						nums[j] = nums[j] + nums[j + 1];
						nums[j + 1] = nums[j] - nums[j + 1];
						nums[j] = nums[j] - nums[j + 1];
					};
				};
			};

			for (int i = 0; i < nums.Length; i++)
			{ Console.WriteLine(nums[i]); };

			Console.ReadLine();
		}
	}
}
